import React, {useState} from 'react';
import {FaDollarSign} from "react-icons/fa";
import {useProvider} from "../../../provider/provider.jsx";
import {ErrorMessage, SuccessMessage} from "../../../notification/custom-notification.jsx";
import {operationCrud} from "../../../crud/Crud.jsx";

export const Withdraw = () => {

    const {
        cardNumber, setCardNumber, setOnlyNumberFormat, setFloatFormat, clearCardNumberFormat
    } = useProvider().providing;
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const changeWithdrawAmount = (e) => {
        e.preventDefault();
        let value = e.target.value;
        value = setOnlyNumberFormat(value);
        if (value === '') {
            setWithdrawAmount('');
        }
        setWithdrawAmount(value)
    }

    const clickWithdraw = async () => {
        try {
            await operationCrud("withdraw", clearCardNumberFormat(cardNumber), setFloatFormat(withdrawAmount));
            SuccessMessage('Successfully withdraw!');
            setCardNumber('');
            window.location.reload();
        } catch (err) {
            ErrorMessage(`Error: Withdraw is not realized! - ${err}`)
        }
    }

    return (
        <div className={`flex flex-col justify-center items-center space-y-4 text-[25px] w-full`}>
            <div className={`flex justify-center items-center h-[40px]`}>
                <input
                    className={`bg-transparent w-[100px] text-white text-center border-b-2 border-black outline-none ring-0`}
                    placeholder={`$0.00`}
                    value={withdrawAmount}
                    onChange={changeWithdrawAmount}
                />
            </div>
            <div
                className={`flex flex-row justify-center items-center w-[200px] h-[40px] bg-black hover:bg-black/80 text-[15px] font-extrabold rounded-lg`}>
                <FaDollarSign/>
                <button type={"submit"} onClick={clickWithdraw}>Withdraw</button>
            </div>
        </div>
    );
}
