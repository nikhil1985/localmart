import React, { useContext, useEffect, useReducer, useState } from "react";
import Constants from "../../Constants/Constants";
import "./AdminPanel.css";
import StoreManagement from "./StoreManagement/StoreManagement";
import ProductContext from "../../Components/Services/ProductContext";
import { useMediaPredicate } from "react-media-hook";
import MenuIcon from "@material-ui/icons/Menu";
import UserContext from "../../Components/Services/UserContext";
import { submitPayload, renderPayload } from "../../services/ApiTemplate";
import history from "../../History";

const finalPayload = {
  clientInfo: {},
  itemList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case Constants.CLIENT_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case Constants.PRODUCT_INFO:
      return {
        ...state,
        clientInfo: {
          ...state.clientInfo,
        },
        itemList: action.payload.itemList,
      };
    case Constants.COMBINED:
      return {
        ...state,
        clientInfo: {
          ...state.clientInfo,
          clientInfo: action.payload.clientInfo,
        },
        itemList: action.payload.itemList,
      };
    case Constants.BOTH:
      return {
        ...state,
        clientInfo: action.payload.clientInfo,
        itemList: action.payload.itemList,
      };

    default:
      return {
        ...state,
      };
  }
};

const menuItem = [
  {
    linkName: Constants.STORE_MANAGEMENT,
    id: 1,
    active: false,
  },
  {
    linkName: Constants.INVENTARY_MANAGEMENT,
    id: 2,
    active: false,
  },
  {
    linkName: Constants.OFFER,
    id: 3,
    active: false,
  },
  {
    linkName: Constants.AUTHENTICATION,
    id: 4,
    active: false,
  },
  {
    linkName: Constants.SETTING,
    id: 5,
    active: false,
  },
];

const AdminPanel = () => {
  const [pageName, setPageName] = useState(Constants.STORE_MANAGEMENT);
  const moreThan650 = useMediaPredicate("(min-width: 650px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [finalProductState, dispatch] = useReducer(reducer, finalPayload);
  const [load, setLoad] = useState();

  const { userProfile } = useContext(UserContext);

  const clickOnButton = (value) => {
    setPageName(value);
    setOpenDrawer(false);
  };

  const finalSubmitPayloadHandler = () => {
    console.log(finalProductState);
    submitPayload(Constants.POST_URL, finalProductState).then((response) => {
      response.data.responceCode === 200 && history.push("/storeDetail");
    });
  };

  useEffect(() => {
    renderPayload(Constants.GET_STORE_URL + `${userProfile.email}`).then(
      (response) => {
        //response.data.responceCode === '200' &&
        console.log(response);
        if (response.data.responceCode === 200) {
          dispatch({
            type: Constants.BOTH,
            payload: response.data.payload,
          });
          setLoad(true);
        }
      }
    );
  }, []);

  const getAdminPanelMenu = () => {
    return menuItem.map((data, index) => {
      return (
        <div key={index}>
          <button
            key={index}
            className="admin_panel_main_sidebar_btn"
            onClick={() => clickOnButton(data.linkName)}
          >
            {data.linkName}
          </button>
        </div>
      );
    });
  };

  const getPageDetail = (pageName) => {
    switch (pageName) {
      case Constants.STORE_MANAGEMENT:
        return (
          <StoreManagement finalSubmitPayloadHandler={finalSubmitPayloadHandler} />
        );

      default:
        break;
    }
  };
  return (
    <ProductContext.Provider value={{ finalProductState, dispatch }}>
      <div className="admin_panel_main">
        {moreThan650 ? (
          <>
            <div className="admin_panel_main_sidebar">
              {getAdminPanelMenu()}
            </div>
            <div className="admin_panel_main_divider"></div>
          </>
        ) : (
          <div onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
          </div>
        )}

        {openDrawer && !moreThan650 ? (
          <div className="admin_panel_drawer">
            <div className="admin_panel_main_sidebar">
              {getAdminPanelMenu()}
            </div>
            <div className="admin_panel_main_maincontect">
              {getPageDetail(pageName)}
            </div>
          </div>
        ) : (
          <div className="admin_panel_main_maincontect">
            {getPageDetail(pageName)}
          </div>
        )}
      </div>
    </ProductContext.Provider>
  );
};

export default AdminPanel;
