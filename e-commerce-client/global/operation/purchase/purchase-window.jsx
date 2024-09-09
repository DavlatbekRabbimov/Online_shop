import React, {useEffect} from 'react';
import {Deposit} from "./buttons/deposit.jsx";
import {Withdraw} from "./buttons/withdraw.jsx";
import {useProvider} from "../../provider/provider.jsx";
import axios from "axios";
import {ErrorMessage} from "../../notification/custom-notification.jsx";

export const PurchaseWindow = ({...props}) => {

    const {
        card, setCard, cardNumber, setCardNumber,
        setOnlyNumberFormat, setCardNumberFormat, clearCardNumberFormat
    } = useProvider().providing;

    const changeCardNumberFourFormat = (e) => {
        e.preventDefault();
        let value = e.target.value;
        value = setOnlyNumberFormat(value);
        value = setCardNumberFormat(value);
        if (clearCardNumberFormat(value) === '') {
            setCard(null);
            setCardNumber('');
        } else {
            setCard(null);
            setCardNumber(value);
        }
    }

    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios.get(`http://localhost:8383/api/card/data/${clearCardNumberFormat(cardNumber)}`);
                setCard(res.data);
            }
            if (cardNumber) {
                fetchData();
            }
        } catch (err) {
            ErrorMessage(`Error: card data is not gotten! - ${err}`);
        }
    }, [cardNumber]);

    return (
        <div id={`purchase`} {...props}>
            <div className={`flex flex-col w-full h-full`}>

                <div id={`credit-card`} className={`mt-6 ml-6 w-[600px] h-[200px] rounded-[15px]`}>
                    <div className={`w-[600px] h-[300px] rounded-[15px] bg-black`}/>
                    <img src={`src/assets/dragon1.png`} alt={'logo'}
                         className={`absolute top-[50px] left-[100px] w-[55px]`}/>

                    <h1 className={`absolute top-[65px] left-[165px] text-[20px] font-poppins font-bold`}>
                        DavSDD CARD
                    </h1>
                    <input
                        className={`absolute top-[175px] left-[100px] text-[30px] text-white font-mono bg-transparent bg-none outline-none placeholder-white`}
                        id={`card-number`}
                        maxLength={19}
                        value={cardNumber}
                        onChange={changeCardNumberFourFormat}
                        placeholder={`0000 0000 0000 0000`}
                    />
                    <h2 className={`absolute top-[230px] left-[100px] text-[22px] font-mono text-white`}>
                        {card ? card.fullName : 'Firstname Lastname'}
                    </h2>
                    <span
                        className={`absolute top-[220px] left-[480px] text-[10px] font-sans font-bold whitespace-nowrap`}>UNTIL DATE</span>
                    <h2 className={`absolute top-[230px] left-[490px] text-[15px] font-mono`}>
                        {card && card.month || '00'}/{card && card.year ? Number(String(card.year).slice(-2)) + 5 : '00'}
                    </h2>

                    <div id={`purchase-buttons`} className={`flex flex-row justify-center items-center w-full`}>
                        <Deposit/>
                        <Withdraw/>
                    </div>
                </div>
            </div>
        </div>
    );

}
