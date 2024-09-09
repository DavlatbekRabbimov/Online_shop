import React from 'react';
import {BsCart4} from "react-icons/bs";
import {FaHeart} from "react-icons/fa";
import {TranslationBox} from "../../../../translations/Translation-box.jsx";
import {useProvider} from "../../../provider/provider.jsx";
import {SearchBox} from "./top-search-box/search-box.jsx";
import {Heart} from "./top-heart/heart.jsx";
import {Basket} from "./top-basket/basket.jsx";

export const TopCenter = () => {

    const {openWindowAuth} = useProvider().providing;

    return (
        <div id={`top-center-box`}>
            <div id={`top-center-container`}>

                <SearchBox/>

                <Basket>
                    <BsCart4 className={`basket-icon`} onClick={openWindowAuth}/>
                </Basket>

                <Heart>
                    <FaHeart className={`heart-icon`} onClick={openWindowAuth}/>
                </Heart>

                <TranslationBox/>

            </div>
        </div>

    );
}
