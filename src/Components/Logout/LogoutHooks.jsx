import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '989279465145-bdemvol7auanea46bd7cn2cddud4afk2.apps.googleusercontent.com';

const LogoutHooks = () => {
  const onLogoutSuccess = (res) => {
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;