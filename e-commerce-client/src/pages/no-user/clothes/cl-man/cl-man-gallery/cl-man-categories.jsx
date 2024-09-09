import React from 'react';
import {FaArrowRightToBracket} from "react-icons/fa6";
import {useProvider} from "../../../../../../global/provider/provider.jsx";
import {
    msHeaders,
    msPaths,
    jkHeaders,
    jkPaths,
    mstHeaders,
    mstPaths,
    mshPaths,
    mshHeaders,
    ClHeaders, msPrices, jkPrices, mstPrices, mshPrices,
} from "./cl-man-headers.jsx";
import {ClImageCatalog} from "./cl-man-image-catalog.jsx";
import {useGallery} from "../../../../../../global/provider/gallery-provider.jsx";

export const ClManCategories = () => {

    const {selectedCategory} = useProvider().providing;
    const {mJacketsImages, mShirtsImages, mShoesImages, mSportsImages} = useGallery().startGallery;

    return (
        <div className={`clothes-slider-box`}>
            <div className={`categories-container overflow-y-auto`}>
                <div className={`${selectedCategory ? 'pt-[0px]' : 'pt-[900px]'} space-y-6`}>
                    {
                        (!selectedCategory || selectedCategory === 'M-shirts') &&
                        <ClManType title={`M-shirts`}
                                   images={mShirtsImages}
                                   headers={msHeaders}
                                   link={msPaths}
                                   prices={msPrices}
                        />
                    }
                    {
                        (!selectedCategory || selectedCategory === 'Jackets') &&
                        <ClManType title={`Jackets`}
                                   images={mJacketsImages}
                                   headers={jkHeaders}
                                   link={jkPaths}
                                   prices={jkPrices}
                        />
                    }
                    {(!selectedCategory || selectedCategory === 'M-sports') &&
                        <ClManType title={`M-Sports`}
                                   images={mSportsImages}
                                   headers={mstHeaders}
                                   link={mstPaths}
                                   prices={mstPrices}
                        />
                    }
                    {
                        (!selectedCategory || selectedCategory === 'M-shoes') &&
                        <ClManType title={`M-shoes`}
                                   images={mShoesImages}
                                   headers={mshHeaders}
                                   link={mshPaths}
                                   prices={mshPrices}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

const ClManType = ({title, images, link, headers, prices}) => {

    return (
        <div>
            <div className={`clothes-label-container`}>
                <label className={`clothes-label`}> {title} </label>
                <FaArrowRightToBracket className={`mt-2 text-[25px] hover:text-green-500 mb-2`}/>
            </div>

            <ClImageCatalog images={images} link={link}/>

            <ClHeaders headers={headers} prices={prices}/>

        </div>
    )
}



