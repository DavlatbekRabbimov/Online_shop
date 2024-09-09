import React, {useState} from 'react';
import {BsCart4} from "react-icons/bs";
import {FaCreditCard, FaHeart} from "react-icons/fa";
import {TranslationBox} from "../../../translations/Translation-box.jsx";
import {SearchBox} from "../../../global/sides/sides-components/top-center/top-search-box/search-box.jsx";
import {Basket} from "../../../global/sides/sides-components/top-center/top-basket/basket.jsx";
import {Heart} from "../../../global/sides/sides-components/top-center/top-heart/heart.jsx";
import {BasketWindow} from "../../../global/operation/basket/basket-window.jsx";
import {PurchaseWindow} from "../../../global/operation/purchase/purchase-window.jsx";

export const UserTopCenter = () => {

    const [isOpenBasket, setIsOpenBasket] = useState(false);
    const [isAccount, setIsAccount] = useState(false);

    return (
        <div id={`top-center-box`}>
            <div id={`top-center-container`}>

                <div className={`absolute top-[40px] left-[320px] cursor-pointer`}>
                    <FaCreditCard className={`w-[48px] h-[48px] text-purple-500 hover:text-purple-300`}
                                  onClick={() => setIsAccount(!isAccount) }/>
                </div>

                {isAccount ? <PurchaseWindow className={`account-global`}/> : <div className={`hidden`}></div>}

                <div className={`absolute top-[45px] left-[380px] cursor-pointer`}>
                    <h1 className={`font-bold text-[25px]`}>$0.00</h1>
                </div>

                <SearchBox/>

                <Basket>
                    <BsCart4 className={`basket-icon`} onClick={() => setIsOpenBasket(!isOpenBasket)}/>
                </Basket>


                {isOpenBasket ? <BasketWindow/> : <div className={`hidden`}></div>}


                <Heart>
                    <FaHeart className={`heart-icon`}/>
                </Heart>

                <TranslationBox/>


                <div id={`translator`}
                     className={`translatorContainer`}>
                    <TranslationBox/>
                </div>
            </div>
        </div>

    );
}
