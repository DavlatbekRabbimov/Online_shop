import React from 'react';
import {useProvider} from "../../../../../global/provider/provider.jsx";

export const HLeftMenu = () => {

    const {selectedCategory, setSelectedCategory} = useProvider().providing;
    const categories = ['clothes', 'jewelry', 'techniques', 'foods', 'gifts'];

    return (
        <div className={`left-menu-box`}>
            <div id={`left-menu-list`} className={`left-menu-list`}>
                <div className={`flex flex-col space-y-6`}>
                    <div className={`flex flex-col space-y-6`}>
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
