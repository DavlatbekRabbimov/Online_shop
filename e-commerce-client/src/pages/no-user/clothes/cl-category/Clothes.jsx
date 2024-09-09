import React from 'react';
import {PhoneAuth} from "../../../../../global/auth/PhoneAuth.jsx";
import {Success} from "../../../../../global/notification/success/success.jsx";
import {Error} from "../../../../../global/notification/error/error.jsx";
import {VrfSuccess} from "../../../../../global/notification/success/vrf-success.jsx";
import {VrfError} from "../../../../../global/notification/error/vrf-error.jsx";
import {ClothesLeftMenu} from "./cl-menu/clothes-left-menu.jsx";
import {ClothesRightMenu} from "./cl-menu/clothes-right-menu.jsx";
import {ClCategories} from "./cl-gallery/cl-categories.jsx";
import {useProvider} from "../../../../../global/provider/provider.jsx";
import {TopCenter} from "../../../../../global/sides/sides-components/top-center/TopCenterBox.jsx";
import {BottomLeft} from "../../../../../global/sides/sides-components/bottom-left/BottomLeft.jsx";
import {TopRight} from "../../../../../global/sides/sides-components/top-right/TopRight.jsx";
import {BottomRight} from "../../../../../global/sides/sides-components/bottom-right/BottomRight.jsx";
import {TopLeft} from "../../../../../global/sides/sides-components/top-left/TopLeft.jsx";

export const Clothes = () => {

    const {isOpenWindow, isSuccess, isError, isVrfSuccess, isVrfError} = useProvider().providing;

    return (
        <div>
            <ClothesLeftMenu/>
            <ClothesRightMenu/>
            <ClCategories/>
            <TopCenter/>
            <TopLeft/>
            <BottomLeft/>
            <TopRight/>
            <BottomRight/>
            {isOpenWindow ? <PhoneAuth/> : <div className={`hidden`}></div>}
            {isSuccess ? <Success/> : <div className={`hidden`}></div>}
            {isError ? <Error/> : <div className={`hidden`}></div>}
            {isVrfSuccess ? <VrfSuccess/> : <div className={`hidden`}></div>}
            {isVrfError ? <VrfError/> : <div className={`hidden`}></div>}
        </div>
    );
}
