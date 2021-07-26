import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../../Components/Services/ProductContext";
import Review from "../../Review/Review";
import UploadCsv from "../../UploadCsv/UploadCsv";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import "./StoreManagement.css";

const StoreManagement = ({ finalSubmitPayloadHandler }) => {
  const { finalProductState } = useContext(ProductContext);
  const [showUpload, setShowUpload] = useState(true);

  useEffect(() => {
    if (finalProductState.itemList.length > 1) {
      setShowUpload(false);
    }
  }, [finalProductState.itemList]);

  const incrementLink = () => {
    //event.preventDefault();
  };
  return (
    <div className="store_management_main">
      <div className="store_management_main_per_info">
        <PersonalInfo />
      </div>
      {showUpload && (
        <div className="store_management_main_upload">
          <div className="store_management_main_upload_header">
            Upload data using csv file
          </div>
          <div className="store_management_main_upload_page">
            <UploadCsv incrementLink={incrementLink} />
          </div>
        </div>
      )}

      {/*<div className="store_management_main_upload">
        <div className="store_management_main_upload_header">Upload Images</div>
        <div className="store_management_main_upload_upload_image">
          <UploadImages/>
        </div>
      </div> */}

      <div className="store_management_main_upload">
        <div className="store_management_main_upload_header">
          List of Products
        </div>
        <div className="store_management_main_list_item">
          <Review incrementLink={incrementLink} showNext={false} />
        </div>
      </div>
      <div className="store_management_main_btn">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            finalSubmitPayloadHandler();
          }}
        >
          {" "}
          Submit &amp; Save
        </Button>
      </div>
    </div>
  );
};

export default StoreManagement;
