import React from 'react';
import {VerificationWindow} from "./auth-windows/verification-window.jsx";
import {useProvider} from "../provider/provider.jsx";
import {PhoneWindow} from "./auth-windows/phone-window.jsx";
export const PhoneAuth = () => {

  const {showVerification} = useProvider().providing;

  return (
    <div className={`auth-box`}>
      { showVerification ? <VerificationWindow/> : <PhoneWindow/>}
    </div>
  );
}
