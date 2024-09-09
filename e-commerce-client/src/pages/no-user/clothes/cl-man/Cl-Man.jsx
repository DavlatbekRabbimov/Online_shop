import React from 'react';
import {TopCenter} from "../../../../../global/sides/sides-components/top-center/TopCenterBox.jsx";
import {ClothesTopLeft} from "../cl-category/cl-sides/clothes-top-left.jsx";
import {ClothesBottomLeft} from "../cl-category/cl-sides/clothes-bottom-left.jsx";
import {ClothesTopRight} from "../cl-category/cl-sides/clothes-top-right.jsx";
import {ClothesBottomRight} from "../cl-category/cl-sides/clothes-bottom-right.jsx";
import {PhoneAuth} from "../../../../../global/auth/PhoneAuth.jsx";
import {Success} from "../../../../../global/notification/success/success.jsx";
import {Error} from "../../../../../global/notification/error/error.jsx";
import {VrfSuccess} from "../../../../../global/notification/success/vrf-success.jsx";
import {VrfError} from "../../../../../global/notification/error/vrf-error.jsx";
import {useProvider} from "../../../../../global/provider/provider.jsx";
import {ClManCategories} from "./cl-man-gallery/cl-man-categories.jsx";
import {ClManLeftMenu} from "./cl-man-menu/cl-man-left-menu.jsx";
import {ClManRightMenu} from "./cl-man-menu/cl-man-right-menu.jsx";
import {TopLeft} from "../../../../../global/sides/sides-components/top-left/TopLeft.jsx";
import {BottomLeft} from "../../../../../global/sides/sides-components/bottom-left/BottomLeft.jsx";
import {TopRight} from "../../../../../global/sides/sides-components/top-right/TopRight.jsx";
import {BottomRight} from "../../../../../global/sides/sides-components/bottom-right/BottomRight.jsx";

export const ClMan = () => {
    const {isOpenWindow, isSuccess, isError, isVrfSuccess, isVrfError} = useProvider().providing;
    return (
        <div>
            <ClManLeftMenu/>
            <ClManRightMenu/>
            <ClManCategories/>
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
