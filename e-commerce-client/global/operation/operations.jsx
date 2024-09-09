import React, {useEffect} from 'react';
import {FaCreditCard, FaProductHunt} from "react-icons/fa";
import {BsCart4} from "react-icons/bs";
import {useProvider} from "../provider/provider.jsx";
import {OrderWindow} from "./order/order-window.jsx";
import {PurchaseWindow} from "./purchase/purchase-window.jsx";
import {BasketWindow} from "./basket/basket-window.jsx";
import axios from "axios";
import {ErrorMessage} from "../notification/custom-notification.jsx";

export const Operations = () => {

    const {
        activeWindow, setActiveWindow,
        orderAmount, setOrderAmount, totalBalance, setTotalBalance,
    } = useProvider().providing;


    useEffect(() => {
        try {
            const fetchData = async () => {
                const resOrder = await axios.get(`http://localhost:8383/api/order/counted`);
                setOrderAmount(resOrder.data);
                const resBalance = await axios.get(`http://localhost:8383/api/card/total-balance`);
                setTotalBalance(resBalance.data);
            }
            fetchData();
        } catch (err) {
            ErrorMessage(`Error: Order count not found! - ${err}`);
        }

    }, []);

    return (
        <div className={`absolute top-[25px] left-[676px] w-[650px] h-[65px] bg-transparent`}>
            <div className="inline-flex shadow-sm ml-[85px]" role="group">

                <button type="button" className={`ms-buttons px-6  rounded-l-lg
                    ${activeWindow === 'order' ? 'ms-active-button' : ''}`}
                        onClick={() => setActiveWindow('order')}
                >
                    <FaProductHunt className={`w-4 h-4 me-2`}/> Order
                </button>

                <button type="button" className={`ms-buttons px-7 
                     ${activeWindow === 'basket' ? 'ms-active-button' : ''}`}
                        onClick={() => setActiveWindow('basket')}
                >
                    <div className={`absolute top-[3px] left-[300px] w-[22px] h-[23px] 
                        bg-orange-500 rounded-full text-center text-white`}>
                        {orderAmount}
                    </div>
                    <BsCart4 className={`w-4 h-4 me-2`}/> Basket
                </button>

                <button type="button" className={`ms-buttons px-5
                    ${activeWindow === 'purchase' ? 'ms-active-button' : ''}`}
                        onClick={() => setActiveWindow('purchase')}
                >
                    <FaCreditCard className="w-4 h-4 me-2"/> Account
                </button>

                <div className={`flex flex-row justify-center items-center w-[277px] space-x-2 border-[1px] border-solid text-[18px]`}>
                    <h1 className={`font-bold text-[25px]`}>${totalBalance || '0.00'}</h1>
                </div>

            </div>
        </div>
    );
}

export function RenderWindow() {
    const {activeWindow} = useProvider().providing;
    switch (activeWindow) {
        case 'order':
            return <OrderWindow/>
        case 'purchase':
            return <PurchaseWindow className={`account-product`}/>
        case 'basket':
            return <BasketWindow/>
    }
}

