import React from "react";
import {Provider} from "./provider/provider.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StarsCanvas} from "./canvas/StarsCanvas.jsx";
import {Home} from "../src/pages/no-user/home/Home.jsx";
import {Notifications} from "./notification/notifications.jsx";
import {Clothes} from "../src/pages/no-user/clothes/cl-category/Clothes.jsx";
import {NotFoundPage} from "../src/pages/not-found-page/NotFoundPage.jsx";
import {ClMan} from "../src/pages/no-user/clothes/cl-man/Cl-Man.jsx";
import {MS1} from "../src/pages/no-user/clothes/ms-1/MS-1.jsx";
import {GalleryProvider} from "./provider/gallery-provider.jsx";
import {CustomNotifications} from "./notification/custom-notification.jsx";
import {SearchProvider} from "./provider/serach-box-provider.jsx";

export const GlobalApp = () => {

    return (
        <Provider>
            <GalleryProvider>
                <CustomNotifications/>
                <Notifications>
                    <SearchProvider>
                    <StarsCanvas/>
                    <App>
                        <BrowserRouter>
                            <Routes>
                                <Route path={`/`} element={<Home/>}/>
                                <Route path={`/clothes`} element={<Clothes/>}/>
                                <Route path={`/men`} element={<ClMan/>}/>
                                <Route path={`/ms-1`} element={<MS1/>}/>
                                <Route path={`*`} element={<NotFoundPage/>}/>
                            </Routes>
                        </BrowserRouter>
                    </App>
                    </SearchProvider>
                </Notifications>
            </GalleryProvider>
        </Provider>
    )
}

const App = ({children}) => {
    return <div className={`app-container`}> {children} </div>
}
