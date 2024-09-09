import React from 'react';
import {FaArrowRightToBracket} from "react-icons/fa6";
import {useProvider} from "../../../../../global/provider/provider.jsx";
import {
    clothesHeaders,
    clothesPaths, foodsHeaders, foodsPaths, giftsHeaders, giftsPaths,
    jewelryHeaders,
    jewelryPaths, techniqueHeaders, techniquePaths
} from "./h-headers.jsx";
import {useGallery} from "../../../../../global/provider/gallery-provider.jsx";

export const HCategorySlider = () => {

    const {selectedCategory} = useProvider().providing;
    const {clothesImages, jewelryImages, techniquesImages, foodsImages, giftsImages} = useGallery().startGallery;

    return (

        <div className={`categories-slider-box`}>
            <div className={`categories-container overflow-y-auto`}>
                <div className={`${selectedCategory ? 'pt-[0px]' : 'pt-[1500px]'} space-y-6`}>
                    {
                        (!selectedCategory || selectedCategory === 'clothes') &&
                        <Categories title={`CLOTHES`}
                                    images={clothesImages}
                                    headers={clothesHeaders}
                                    link={clothesPaths}
                        />
                    }
                    {
                        (!selectedCategory || selectedCategory === 'jewelry') &&
                        <Categories title={`JEWELRY`}
                                    images={jewelryImages}
                                    headers={jewelryHeaders}
                                    link={jewelryPaths}
                        />
                    }
                    {(!selectedCategory || selectedCategory === 'techniques') &&
                        <Categories title={`TECHNIQUES`}
                                    images={techniquesImages}
                                    headers={techniqueHeaders}
                                    link={techniquePaths}
                        />
                    }
                    {
                        (!selectedCategory || selectedCategory === 'foods') &&
                        <Categories title={`FOODS`}
                                    images={foodsImages}
                                    headers={foodsHeaders}
                                    link={foodsPaths}
                        />
                    }
                    {
                        (!selectedCategory || selectedCategory === 'gifts') &&
                        <Categories title={`GIFTS`}
                                    images={giftsImages}
                                    headers={giftsHeaders}
                                    link={giftsPaths}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

const Categories = ({title, images, link, headers}) => {
    return (
        <div>
            <div className={`clothes-label-container`}>
                <label className={`clothes-label`}> {title} </label>
                <FaArrowRightToBracket className={`mt-2 text-[25px] hover:text-green-500 mb-2`}/>
            </div>

            <div className={`clothes-items`}>
                {images && images.map((image, index) => (
                    <div key={`image-${index}`} className={`hover:scale-105 hover:bg-black`}>
                        <img src={image}
                             alt={''}
                             className={`max-w-full h-[250px] rounded-lg`}
                             onClick={() => window.location.href = link[index]}
                        />
                    </div>
                ))}
            </div>
            <div className={`clothes-items-header`}>
                {headers && headers.map((header, index) => (
                    <h1 key={`header-${index}`} tabIndex={index}>
                        {header}
                    </h1>
                ))}
            </div>
        </div>
    )
}
