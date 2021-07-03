import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import "./PersonalInfo.css";
import PersonalInfoItem from "./PersonalInfoItem";
import ProductContext from "../../../../Components/Services/ProductContext";
import UserContext from "../../../../Components/Services/UserContext";
import Constants from "../../../../Constants/Constants";


const PersonalInfo = () => {
  const {finalProductState, dispatch} = useContext(ProductContext);
  const { userProfile } = useContext(UserContext);

  console.log(finalProductState);

  const [storeInfo, setStoreInfo] = useState(finalProductState.clientInfo);

  useEffect(() => {
    console.log("in useeffect of person")
    setStoreInfo(finalProductState.clientInfo);
  }, [])

  const [error, setError] = useState({ name: "", hasError: false });

  const handleValidateInput = (event) => {
    event.preventDefault();
    setStoreInfo({ ...storeInfo, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    if (storeInfo.storeName.length < 1) {
      setError({ name: "Store Name", hasError: true });
      return;
    } else {
      setError({ name: "Store Name", hasError: false });
    }
    if (storeInfo.categoryName.length < 1) {
      setError({ name: "Category Name", hasError: true });
      return;
    } else {
      setError({ name: "Category Name", hasError: false });
    }

    if (storeInfo.locationName.length < 1) {
      setError({ name: "LocationName Name", hasError: true });
      return;
    } else {
      setError({ name: "LocationName Name", hasError: false });
    }

    if (storeInfo.firstName.length < 1) {
      setError({ name: "First Name", hasError: true });
      return;
    } else {
      setError({ name: "First Name", hasError: false });
    }

    if (storeInfo.lastName.length < 1) {
      setError({ name: "Last Name", hasError: true });
      return;
    } else {
      setError({ name: "Last Name", hasError: false });
    }

    if (storeInfo.email.length < 1) {
      setError({ name: "Email", hasError: true });
      return;
    } else {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(storeInfo.email)) {
        setError({ name: "Email", hasError: true });
        return;
      }

      setError({ name: "Email", hasError: false });
    }

    if (storeInfo.mobileNumber.length < 1) {
      setError({ name: "Mobile Number", hasError: true });
      return;
    } else {
      setError({ name: "Mobile Number", hasError: false });
    }



    const combinedObject = {...userProfile,...storeInfo};
    dispatch({
      type: Constants.CLIENT_INFO,
      payload: { ...finalProductState, clientInfo: combinedObject },
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="personal_info">
      <div className="personal_info_header">Personal and Store Information</div>
      {error.hasError && (
        <h2 style={{ color: "red", fontWeight: "normal", marginTop: "10px" }}>
          Please correct the value of {error.name}
        </h2>
      )}
      <div className="personal_info_content">
        <form>
          <PersonalInfoItem
            htmlFor="storeName"
            name="Store Name"
            spanId="storeNamePopUp"
            helpText="Provide store name , Cannot be changed once saved."
            handleValidateInput={handleValidateInput}
            valueForEle={storeInfo.storeName}
          ></PersonalInfoItem>

          <PersonalInfoItem
            htmlFor="categoryName"
            name="Category"
            spanId="categoryNamePopUp"
            helpText="Provide your store catergory like Grocery/Medicine etc."
            handleValidateInput={handleValidateInput}
            valueForEle={storeInfo.categoryName}
          ></PersonalInfoItem>

          <PersonalInfoItem
            htmlFor="locationName"
            name="Location"
            spanId="locationNamePopUp"
            helpText="Provide store address"
            handleValidateInput={handleValidateInput}
            valueForEle={storeInfo.locationName}
          ></PersonalInfoItem>

          <div>
            <PersonalInfoItem
              htmlFor="firstName"
              name="First Name"
              spanId="firstNamePopUp"
              helpText="Owner first name"
              handleValidateInput={handleValidateInput}
              valueForEle={storeInfo.firstName}
            ></PersonalInfoItem>
          </div>
          <div>
            <PersonalInfoItem
              htmlFor="lastName"
              name="Last Name"
              spanId="lastNamePopUp"
              helpText="Owner Last name"
              handleValidateInput={handleValidateInput}
              valueForEle={storeInfo.lastName}
            ></PersonalInfoItem>
          </div>

          <div>
            <PersonalInfoItem
              htmlFor="email"
              name="Email Id"
              spanId="emailIdPopUp"
              helpText="Email Id"
              type="email"
              handleValidateInput={handleValidateInput}
              valueForEle={storeInfo.email}
            ></PersonalInfoItem>
          </div>
          <div>
            <PersonalInfoItem
              htmlFor="mobileNumber"
              name="Mobile Number"
              spanId="mobileNoPopUp"
              helpText="Owner Mobile name"
              type="number"
              handleValidateInput={handleValidateInput}
              valueForEle={storeInfo.mobileNumber}
            ></PersonalInfoItem>
          </div>
          <div className="personal_info_button">
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                submitForm(event);
              }}
            >
              {" "}
              Save{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
