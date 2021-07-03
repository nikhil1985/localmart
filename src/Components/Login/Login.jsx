import React, { useContext } from "react";

import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../../Util/RefreshToken";
import UserContext from "../Services/UserContext";
import Constants from "../../Constants/Constants";
import history from "../../History";


// refresh token

const clientId =
  "989279465145-bdemvol7auanea46bd7cn2cddud4afk2.apps.googleusercontent.com";

const Login = ({path}) => {
  const { userProfile, dispatch } = useContext(UserContext);

  const onSuccess = (res) => {
    dispatch({
      type: Constants.LOGIN_SUCCESS,
      payload: {
        ...userProfile,
        name: res.profileObj.name,
        firstName: res.profileObj.givenName,
        lastName: res.profileObj.familyName,
        email: res.profileObj.email,
        imageUrl: res.profileObj.imageUrl,
        loggedIn: true,
        path:path,
      },
    });
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    dispatch({
      type: Constants.LOGIN_FAILURE,
      payload: { ...userProfile, name: "Guest", loggedIn: false },
    });
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Log in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
      />
    </div>
  );
};

export default Login;
