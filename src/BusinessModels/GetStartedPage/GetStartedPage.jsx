import React, { useContext, useEffect, useReducer, useState } from "react";
import ClientInfo from "../ClientInfo/ClientInfo";
import Sidebar from "../Sidebar/Sidebar";
import "./GetStartedPage.css";
import Constants from "../../Constants/Constants";
import ProductContext from "../../Components/Services/ProductContext";
import UploadCsv from "../UploadCsv/UploadCsv";
import Review from "../Review/Review";
import { Button } from "@material-ui/core";
import { postApiCall, getApiCall } from "../../services/ApiTemplate";
import UserContext from "../../Components/Services/UserContext";

const finalPayload = {
  clientInfo: {},
  itemList: {},
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
        ...action.payload,
      };
    case Constants.COMBINED:
      return {
        ...state,
        clientInfo:{...state.clientInfo,clientInfo: action.payload.clientInfo},
        itemList: action.payload.itemList,
      };
    default:
      return {
        ...state,
      };
  }
};

const onboardState = {
  activeLink: 1,
  currentPointer: 1,
};

const GetStartedPage = () => {
  const [state, setstate] = useState(onboardState);
  const [finalProductState, dispatch] = useReducer(reducer, finalPayload);
  const [storeName, setStoreName] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(false);
  const { userProfile } = useContext(UserContext);

  const apiCallback = (response, type) => {

    switch (type) {
      case Constants.GET_STORE:
        if (200 === response.data.responceCode) {
          dispatch({
            type: Constants.COMBINED,
            payload: response.data.payload,
          });
          setStoreName(response.data.payload.clientInfo.storeName);
        }

        break;
      case Constants.SAVE_STORE:
        if (200 === response.data.responceCode) {
          setApiSuccess(true);
          incrementLink();
        } else {
          setApiSuccess(false);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    var url = Constants.GET_STORE_URL + userProfile.email;
    getApiCall(url, apiCallback);
  }, []);

  const handleSubmit = (event, activeLink) => {
    setstate({ ...state, activeLink: activeLink });
  };

  const incrementLink = () => {
    //event.preventDefault();
    var newActiveLink = state.activeLink + 1;
    setstate({ ...state, activeLink: newActiveLink });
  };

  const sendToApi = () => {
    dispatch({
      type: Constants.CLIENT_INFO,
      payload: {
        clientInfo: { ...finalProductState.clientInfo, storeName: storeName },
      },
    });
    setTimeout(() => {console.log("Waiting for timeout")}, 800);
    postApiCall(Constants.POST_URL, finalProductState, apiCallback);
  };


  return (
    <ProductContext.Provider value={{ finalProductState, dispatch }}>
      <div>
        {apiSuccess === false && (
          <div style={{ textAlign: "center", color: "red" }}>
            Problem with Saving try again
          </div>
        )}
        <div className="getstartedpage_main">
          <div className="getstartedpage_main__sidebar">
            <Sidebar onclick={handleSubmit} state={state}></Sidebar>
          </div>

          {state.activeLink === 1 && (
            <div className="getstartedpage_main__mainbar">
              <ClientInfo incrementLink={incrementLink} />
            </div>
          )}

          {state.activeLink === 2 && (
            <div className="getstartedpage_main__mainbar">
              <UploadCsv incrementLink={incrementLink} />
            </div>
          )}
          {state.activeLink === 3 && (
            <div className="getstartedpage_main__mainbar">
              <Review incrementLink={incrementLink}></Review>
            </div>
          )}
          {state.activeLink === 4 && (
            <div className="getstartedpage_main__mainbar">
              <div>
                <form className="getstartedpage_main__mainbar_submit">
                  <div className="getstartedpage_main__mainbar_submit_name">
                    <label for="storename">Your Store Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="storename"
                      name="storename"
                      value={storeName}
                      onChange={(event) => {
                        setStoreName(event.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <br />
                </form>
              </div>

              <Button
                size="large"
                variant="contained"
                color="primary"
                style={{ marginTop: "5rem" }}
                onClick={(event) => sendToApi()}
                disabled={null === storeName}
              >
                Publish &amp; Go Online
              </Button>
            </div>
          )}

          {apiSuccess === true && (
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <h2> Your store is online now</h2>
              <Button
                size="large"
                variant="contained"
                color="primary"
                style={{ marginTop: "5rem" }}
                onClick={(event) => sendToApi()}
                disabled={null === storeName}
              >
                Visit Store
              </Button>
            </div>
          )}
        </div>
      </div>
    </ProductContext.Provider>
  );
};

export default GetStartedPage;
