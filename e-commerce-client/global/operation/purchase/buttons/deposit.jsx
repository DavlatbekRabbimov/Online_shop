import React, {useState} from 'react';
import {FaDollarSign} from "react-icons/fa";
import {useProvider} from "../../../provider/provider.jsx";
import {ErrorMessage, SuccessMessage} from "../../../notification/custom-notification.jsx";
import {operationCrud} from "../../../crud/Crud.jsx";

export const Deposit = () => {

    const {cardNumber, setOnlyNumberFormat, clearCardNumberFormat, setFloatFormat} = useProvider().providing;
    const [depositAmount, setDepositAmount] = useState('');
    const changeDepositAmount = (e) => {
        e.preventDefault();
        let value = e.target.value;
        value = setOnlyNumberFormat(value);
        if (value === '') {
            setDepositAmount('');
        }
        setDepositAmount(value);
    }

    const clickDeposit = async () => {
        try {
            await operationCrud("deposit", clearCardNumberFormat(cardNumber), setFloatFormat(depositAmount));
            SuccessMessage('Successfully deposit!');
            setDepositAmount('');
            window.location.reload();
        } catch (err) {
            ErrorMessage(`Error: deposit is not realized! - ${err}`);
        }
    }

    return (
        <div className={`flex flex-col justify-center items-center space-y-4 text-[25px] w-full`}>
            <div className={`flex justify-center items-center h-[40px]`}>
                <input
                    className={`bg-transparent w-[100px] text-white text-center border-b-2 border-black outline-none ring-0`}
                    placeholder={`$0.00`}
                    value={depositAmount}
                    onChange={changeDepositAmount}
                />
            </div>
            <div
                className={`flex flex-row justify-center items-center w-[200px] h-[40px] bg-black hover:bg-black/80 text-[15px] font-extrabold rounded-lg`}>
                <FaDollarSign/>
                <button type={`submit`} onClick={clickDeposit}>Deposit</button>
            </div>
        </div>
    );
}
