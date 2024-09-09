import React, {createContext, useContext, useState} from "react";

const ProviderContext = createContext();
export const Provider = ({children}) => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [loading, setLoading] = useState(false)
    const [showVerification, setShowVerification] = useState(false);
    const [otpResult, setOtpResult] = useState(null);
    const [isOpenWindow, setIsOpenWindow] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isVrfSuccess, setIsVrfSuccess] = useState(false);
    const [isVrfError, setIsVrfError] = useState(false);
    const [isOpenUser, setIsOpenUser] = useState(false);
    const [productName, setProductName] = useState('MS-1 Shirt');
    const [cardNumber, setCardNumber] = useState('');
    const [activeWindow, setActiveWindow] = useState('order');
    const [orderAmount, setOrderAmount] = useState(0);
    const [card, setCard] = useState(null);
    const [totalBalance, setTotalBalance] = useState(0.0);
    const [paid, setPaid] = useState(false);
    const openWindowAuth = () => {
        setIsOpenWindow(true)
    }
    const setOnlyNumberFormat = (value) => {
        return value.replace(/[^0-9.]/g, '');
    }
    const setCardNumberFormat = (value) => {
        return value.replace(/(\d{4})/g, '$1 ');
    }
    const clearCardNumberFormat = (value) => {
        return value.replace(/\s/g, '');
    }
    const setFloatFormat = (amount) => {
        return parseFloat(amount.replace(/\s/g, ''));
    }

    const providing = {
        selectedCategory, setSelectedCategory, loading, setLoading,
        showVerification, setShowVerification, otpResult, setOtpResult,
        isOpenWindow, setIsOpenWindow, isSuccess, setIsSuccess,
        isError, setIsError, isVrfSuccess, setIsVrfSuccess, card, setCard,
        isVrfError, setIsVrfError, isOpenUser, setIsOpenUser, productName, setProductName,
        cardNumber, setCardNumber, activeWindow, setActiveWindow, orderAmount, setOrderAmount,
        totalBalance, setTotalBalance, paid, setPaid,
        openWindowAuth, setOnlyNumberFormat, setCardNumberFormat, clearCardNumberFormat, setFloatFormat,
    }

    return (
        <ProviderContext.Provider value={{providing}}>
            {children}
        </ProviderContext.Provider>
    );
}

export function useProvider() {
    return useContext(ProviderContext);
}

