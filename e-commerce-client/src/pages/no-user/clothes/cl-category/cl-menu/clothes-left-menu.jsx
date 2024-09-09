import React from 'react';
import {useProvider} from "../../../../../../global/provider/provider.jsx";

export const ClothesLeftMenu = () => {

    const {selectedCategory, setSelectedCategory} = useProvider().providing;
    const categories = ['men', 'women', 'kids', 'animals'];

    return (
        <div className={`clothes-left-menu-box`}>
            <div id={`clothes-left-menu-list`}
                 className={`clothes-left-menu-list`}>
                <div className={`clothes-container`}>
                    <div className={`clothes-container`}>
                        {categories.map(category => (
                            <div key={category} className={`space-x-2`}>
                                <input type="checkbox"
                                       className="checkbox"
                                       checked={selectedCategory === category}
                                       onChange={(e) => {
                                           if (e.target.checked) {
                                               setSelectedCategory(category);
                                           } else {
                                               setSelectedCategory(null);
                                           }
                                       }}/>

                                <a href={`/${category}`}
                                   className="link">{category.charAt(0).toUpperCase() + category.slice(1)}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
