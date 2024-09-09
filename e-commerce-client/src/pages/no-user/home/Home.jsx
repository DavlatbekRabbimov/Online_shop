import React from 'react';
import {TopCenter} from "../../../../global/sides/sides-components/top-center/TopCenterBox.jsx";
import {HLeftMenu} from "./h-menu/h-left-menu.jsx";
import {TopLeft} from "../../../../global/sides/sides-components/top-left/TopLeft.jsx";
import {BottomLeft} from "../../../../global/sides/sides-components/bottom-left/BottomLeft.jsx";
import {HRightMenu} from "./h-menu/h-right-menu.jsx";
import {TopRight} from "../../../../global/sides/sides-components/top-right/TopRight.jsx";
import {BottomRight} from "../../../../global/sides/sides-components/bottom-right/BottomRight.jsx";
import {HAdvertisement} from "./h-advertisement/h-advertisement.jsx";
import {HCategorySlider} from "./h-gallery/h-category-slider.jsx";
import {PhoneAuth} from "../../../../global/auth/PhoneAuth.jsx";
import {useProvider} from "../../../../global/provider/provider.jsx";
import {Success} from "../../../../global/notification/success/success.jsx";
import {Error} from "../../../../global/notification/error/error.jsx";
import {VrfSuccess} from "../../../../global/notification/success/vrf-success.jsx";
import {VrfError} from "../../../../global/notification/error/vrf-error.jsx";
import {UserTopCenter} from "../../user/user-top-center.jsx";
import {UserTopRight} from "../../user/user-top-right.jsx";
import {PhoneCallerWindow} from "../../../../global/sides/sides-components/bottom-left/phone-caller-window.jsx";

export const Home = () => {

    const {isOpenUser, isOpenWindow, isSuccess, isError, isVrfSuccess, isVrfError} = useProvider().providing;

    return (
        <div>
            {
                isOpenUser
                    ? (
                        <div>
                            <UserTopCenter/>
                            <HLeftMenu/>
                            <TopLeft/>
                            <BottomLeft/>
                            <HRightMenu/>
                            <UserTopRight/>
                            <BottomRight/>
                            <HAdvertisement/>
                            <HCategorySlider/>
                        </div>
                    )
                    :
                    (
                        <div>
                            <TopCenter/>
                            <HLeftMenu/>
                            <TopLeft/>
                            <BottomLeft/>
                            <HRightMenu/>
                            <TopRight/>
                            <BottomRight/>
                            <HAdvertisement/>
                            <HCategorySlider/>
                            {isOpenWindow ? <PhoneAuth/> : <div className={`hidden`}></div>}
                            {isSuccess ? <Success/> : <div className={`hidden`}></div>}
                            {isError ? <Error/> : <div className={`hidden`}></div>}
                            {isVrfSuccess ? <VrfSuccess/> : <div className={`hidden`}></div>}
                            {isVrfError ? <VrfError/> : <div className={`hidden`}></div>}
                        </div>
                    )
            }
        </div>
    );
}

