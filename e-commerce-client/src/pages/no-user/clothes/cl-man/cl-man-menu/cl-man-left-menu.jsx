import React from 'react';
import {useProvider} from "../../../../../../global/provider/provider.jsx";

export const ClManLeftMenu = () => {

    const {selectedCategory, setSelectedCategory} = useProvider().providing;
    const categories = ['M-shirts', 'Jackets', 'M-sports', 'M-shoes'];

    function checkboxFilter() {
        return (
            <div className={`checkbox-filter-container`}>
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
                           className="link">
                            {category.charAt(0).toUpperCase() + category.slice(1)}</a>
                    </div>
                ))}
            </div>
        )
    }


    return (
        <div className={`clothes-left-menu-box`}>
            <div id={`clothes-left-menu-list`}
                 className={`clothes-left-menu-list`}>
                <div className={`clothes-container`}>
                    {checkboxFilter()}
                </div>
            </div>
        </div>
    );
}
