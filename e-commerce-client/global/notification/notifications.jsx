import {useProvider} from "../provider/provider.jsx";
import React, {createContext, useContext, useState} from "react";

const NotificationsContext = createContext();
export const Notifications = ({children}) => {

    const {setIsSuccess, setIsError, setIsVrfSuccess, setIsVrfError} = useProvider().providing;

    function notifications(type) {
        switch (type) {
            case 'success':
                setTimeout(() => {
                    setIsSuccess(true);
                    setTimeout(() => {
                        setIsSuccess(false);
                    }, 1500);
                }, 300);
                break;
            case 'error':
                setTimeout(() => {
                    setIsError(true);
                    setTimeout(() => {
                        setIsError(false);
                    }, 1500);
                }, 300);
                break;
            case 'vrfSuccess':
                setTimeout(() => {
                    setIsVrfSuccess(true);
                    setTimeout(() => {
                        setIsVrfSuccess(false);
                    }, 1500);
                }, 300);
                break;
            case 'vrfError':
                setTimeout(() => {
                    setIsVrfError(true);
                    setTimeout(() => {
                        setIsVrfError(false);
                    }, 1500);
                }, 300);
                break;
            default:
                return null;
        }
    }

    const start = (type) => {
        notifications(type)
    }

    return (
        <NotificationsContext.Provider value={{start}}>
                {children}
        </NotificationsContext.Provider>
    )

}

export function useNotifications() {
    return useContext(NotificationsContext);
}


