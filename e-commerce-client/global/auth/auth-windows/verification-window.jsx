import React, {useState} from "react";
import {CgSpinner} from "react-icons/cg";
import {useProvider} from "../../provider/provider.jsx";
import OtpInput from "react-otp-input";
import {useNotifications} from "../../notification/notifications.jsx";

export const VerificationWindow = () => {

    const {loading, setLoading, otpResult, setIsOpenUser} = useProvider().providing;
    const [otp, setOtp] = useState('');
    const notifications = useNotifications().start;
    const verifySMSCode = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await otpResult.confirm(otp);
            notifications('vrfSuccess');
            setIsOpenUser(true);
        } catch (err) {
            console.error(err);
            notifications('vrfError');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={`auth-window-box`}>
            <label className={`auth-window-label`}>Verify phone number with code!</label>
            <div className={`verify-number`}>
                <OtpVerification disabled={false}
                                 autoFocus
                                 value={otp}
                                 onChange={setOtp}
                                 required
                />
            </div>
            <button className={`verify-number-button`}
                    onClick={verifySMSCode}>
                {loading && CgSpinner}
                Verify code
            </button>
        </div>
    )
}

export const OtpVerification = ({...props}) => {
    return (
        <OtpInput
            {...props}
            otpType="number"
            numInputs={6}
            disabled={false}
            shouldAutoFocus={true}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
                <input {...props}
                       className={`otpInput`}
                       style={{width: "3vw", height: "3vw", textAlign: "center"}}/>
            )}
        />
    )
}