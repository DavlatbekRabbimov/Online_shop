import React from "react";

export const HRightMenu = () => {
    return (
        <div className={`right-menu-box`}>
            <div id={`left-menu-list`}
                 className={`right-menu-list`}
            >
                <div className={`flex flex-col space-y-6`}>
                    <div className={`space-x-2`}>
                        <input type="checkbox" className="checkbox"/>
                        <a href="/new" className="link">New</a>
                    </div>
                    <div className={`space-x-2`}>
                        <input type="checkbox" className="checkbox"/>
                        <a href="/popular" className="link">Popular</a>
                    </div>
                    <div className={`space-x-2`}>
                        <input type="checkbox" className="checkbox"/>
                        <a href="/brands" className="link">Brands</a>
                    </div>
                    <div className={`space-x-2`}>
                        <input type="checkbox" className="checkbox"/>
                        <a href="/discounts" className="link">Discounts</a>
                    </div>
                    <div className={`space-x-2`}>
                        <input type="checkbox" className="checkbox"/>
                        <a href="/second-hand" className="link">Second-hand</a>
                    </div>
                </div>
            </div>
        </div>
    );
}