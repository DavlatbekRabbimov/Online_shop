import React, {useState} from "react";
import {useProvider} from "../../provider/provider.jsx";
import {CgSpinner} from "react-icons/cg";
import {auth} from "../../../firebase.config.js";
import {IoIosCloseCircle} from "react-icons/io";
import {signInWithPhoneNumber, RecaptchaVerifier} from "firebase/auth";
import {useNotifications} from "../../notification/notifications.jsx";
export const PhoneWindow = ()=> {

    const prefixNumber = '+998';
    const [phoneNumber, setPhoneNumber] = useState(prefixNumber);
    const [hidden, setHidden] = useState(false);
    const {loading, setLoading,
        setShowVerification,
        setOtpResult, setIsOpenWindow,
    } = useProvider().providing;

    const notifications = useNotifications().start;
    function addFormatPhoneNumber(phoneNumber) {
        let cleaned = ('' + phoneNumber).replace(/\D/g, '');
        let match = cleaned.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/);
        if (match) {
            return '+' + match[1] + ' ' + match[2] + ' ' + match[3] + ' ' + match[4] + ' ' + match[5];
        }
        return null;
    }

    function removeFormatPhoneNumber(phoneNumber){
        return phoneNumber.replace(/\s/g, '');
    }
    const changePhoneNumber = (e) => {
        let value = e.target.value;
        if (value.substring(0,4) !== prefixNumber){
            value = prefixNumber + value.slice(4);
        }
        else {
            value = value.replace(/[^+0-9]/g, '');
        }
        setHidden(value.length > 4);
        setPhoneNumber(addFormatPhoneNumber(value));
    }

    const sendSMSCode = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
                'size': 'invisible',
                'callback': (response) => {
                    console.log(response);
                },
                "expired-callback": () => {
                },
            });
            await recaptchaVerifier.render();

            const confirmationResult =
                await signInWithPhoneNumber(auth, removeFormatPhoneNumber(phoneNumber), recaptchaVerifier);
            setOtpResult(confirmationResult);
            notifications('success');
            setShowVerification(true);
        } catch (err) {
            console.error(err);
            notifications('error');
        } finally {
            setLoading(false);
        }
    }

    const closeWindowAuth = (e) => {
        e.preventDefault();
        setIsOpenWindow(false);
    }

    return(
        <div className={`auth-window-box`}>
            <div id="sign-in-button"></div>
            <IoIosCloseCircle
                className={`absolute text-[30px] top-[25px] left-[425px] text-black/50 hover:text-black/80`}
                onClick={closeWindowAuth}
            />
            <label htmlFor={phoneNumber} className={`auth-window-label`}>
                Send SMS for verification code!
            </label>
            <div className={`phone-input-container`}>
                <input className={`phone-input`}
                       id={`phoneNumber`}
                       name={`phoneNumber`}
                       autoComplete="phoneNumber"
                       type="tel"
                       value={phoneNumber}
                       onChange={changePhoneNumber}
                       maxLength={20}
                       required
                />
                <input className={`phone-input-bg`}
                       placeholder={hidden ? '' : '+998 00 000-00-00'}
                />
            </div>
            <button className={`send-sms-button`}
                    onClick={sendSMSCode}>
                {loading && CgSpinner}
                Send SMS
            </button>
        </div>
    )
}