import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '989279465145-bdemvol7auanea46bd7cn2cddud4afk2.apps.googleusercontent.com';

const Logout = () => {
  const onSuccess = () => {
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;