import React from 'react';
import {FaArrowRightToBracket} from "react-icons/fa6";
import {useProvider} from "../../../../../../global/provider/provider.jsx";
import {
    animalsHeaders,
    animalsPaths,
    kidsHeaders,
    kidsPaths,
    menHeaders,
    menPaths,
    womenHeaders,
    womenPaths
} from "./cl-headers.jsx";
import {useGallery} from "../../../../../../global/provider/gallery-provider.jsx";

export const ClCategories = () => {

    const {selectedCategory} = useProvider().providing;
    const {animalsImages, kidsImages, menImages, womenImages} = useGallery().startGallery;

    return (

        <div className={`clothes-slider-box`}>
            <div className={`categories-container overflow-y-auto`}>
                <div className={`${selectedCategory ? 'pt-[0px]' : 'pt-[900px]'} space-y-6`}>
                    {
                        (!selectedCategory || selectedCategory === 'men') &&
                        <ClothesType title={`Men`}
                                     images={menImages}
                                     headers={menHeaders}
                                     link={menPaths}
                        />
                    }
                    {
                        (!selectedCategory || selectedCategory === 'women') &&
                        <ClothesType title={`Women`}
                                     images={womenImages}
                                     headers={womenHeaders}
                                     link={womenPaths}
                        />
                    }
                    {(!selectedCategory || selectedCategory === 'kids') &&
                        <ClothesType title={`Kids`}
                                     images={kidsImages}
                                     headers={kidsHeaders}
                                     link={kidsPaths}
                        />
                    }
                    {
                        (!selectedCategory || selectedCategory === 'animals') &&
                        <ClothesType title={`Animals`}
                                     images={animalsImages}
                                     headers={animalsHeaders}
                                     link={animalsPaths}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

const ClothesType = ({title, images, link, headers}) => {
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
