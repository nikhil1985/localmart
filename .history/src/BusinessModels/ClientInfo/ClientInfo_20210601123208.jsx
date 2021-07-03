import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import "./ClientInfo.css";
import UserContext from "../../Components/Services/UserContext";
import ProductContext from "../../Components/Services/ProductContext";
import Constants from "../../Constants/Constants";

var loc = null;

const ClientInfo = ({incrementLink}) => {
  const { userProfile } = useContext(UserContext);
  const [clientInfo, setClientInfo] = useState({});
  const {finalProductState, dispatch} = useContext(ProductContext);
  const [location, setLocation] = useState();


  useEffect(  () => {

    async function fetchMyLocation(){
      if ("geolocation" in navigator) {
         await navigator.geolocation.getCurrentPosition(function (position) {
         if(null === loc){
           loc += position.coords.latitude;
           loc += " , ";
           loc += position.coords.longitude;
           setLocation(loc);
         }else{
          setLocation(loc);
         }
       });
     } else {
     }
   
    }
    fetchMyLocation();
    
  }, []);


  const handleChange = (event) => {
    event.preventDefault();
    setClientInfo({...clientInfo, [event.target.name]: event.target.value });
  }
  const handleClick = (event) => {
    event.preventDefault();
    const combinedObject = {...userProfile,...clientInfo};
    dispatch({
      type: Constants.CLIENT_INFO,
      payload: { ...finalProductState, clientInfo: combinedObject },
    });
    incrementLink(event);
  }

  return (
    <div className="clientinfo__main">
      <h3 className="clientinfo__main_header">Submit Personal Info</h3>

      <div>
        <form>
          <div>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstName"
              placeholder="Your name.."
              defaultValue={userProfile.firstName}
              onChange={(event) => handleChange(event)}
              value={clientInfo.firstName ? clientInfo.firstName :userProfile.firstName}
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastName"
              placeholder="Your last name.."
              defaultValue={userProfile.lastName}
              onChange={(event) => handleChange(event)}
              value={clientInfo.lastName ? clientInfo.lastName :userProfile.lastName}
            />
          </div>
          <div>
            <label htmlFor="email">Email Id</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="mail id"
              value={userProfile.email}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="phNumber">Mobile Number</label>
            <input
              type="text"
              id="phNumber"
              name="phNumber"
              placeholder="Phone Number"
              onChange={(event) => handleChange(event)}
              value={clientInfo.phNumber ? clientInfo.phNumber :userProfile.phNumber}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              defaultValue={location}
              value={location}
              readOnly
            />
          </div>
        </form>
        <div className="clientinfo__main_button">
          <Button color="primary" variant="contained" size="large" onClick={(event) => handleClick(event)}>
            Next
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default ClientInfo;
