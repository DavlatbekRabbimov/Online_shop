import React, {useState} from "react"
import {ImageSelector} from "./ms1-sliders/image-selector.jsx";
import {ImageSlider} from "./ms1-sliders/image-slider.jsx";
import {useProvider} from "../../../../../global/provider/provider.jsx";
import {useGallery} from "../../../../../global/provider/gallery-provider.jsx";
import {Operations, RenderWindow} from "../../../../../global/operation/operations.jsx";

export const MS1 = () => {

    const {productName} = useProvider().providing;
    const {shirtImages} = useGallery().startGallery;

    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const prev = () => {
        setActiveImageIndex((activeImageIndex - 1 + shirtImages.length) % shirtImages.length);
    }
    const next = () => {
        setActiveImageIndex((activeImageIndex + 1) % shirtImages.length);
    }

    return (
        <div className={`flex flex-row w-full h-full`}>

            <div id={`product-logo`}
                 className={`absolute top-[25px] left-[126px] w-[115px] h-[65px] bg-purple-950 opacity-75 blur-sm  rounded-lg`}
                 onClick={() => window.location.href = '/'}
            />
            <img src={`src/assets/dragon1.png`} alt={`icon`} className={`absolute top-[25px] left-[126px] ml-[30px] mt-[5px] w-[55px] h-[55px]`}
                 onClick={() => window.location.href = '/'}
            />

            <div id={`product-name`} className={`absolute top-[25px] left-[250px] w-[500px] h-[65px] bg-purple-950 opacity-75 blur-sm text-black rounded-lg`}/>
            <h1 className={`absolute top-[25px] left-[430px] p-4 text-center text-[20px] text-white font-display `}>
                {productName}
            </h1>

            <ImageSelector images={shirtImages} setActiveImageIndex={setActiveImageIndex}/>

            <ImageSlider images={shirtImages} activeImageIndex={activeImageIndex} prev={prev} next={next}/>

            <Operations/>

            <div className={`absolute bottom-[45px] left-[126px] w-[627px] h-[100px] bg-purple-950 opacity-75 blur-sm rounded-lg`}>

            </div>

            <div className={`absolute bottom-[45px] right-[126px] w-[647px] h-[100px] bg-purple-950 rounded-lg opacity-75 blur-sm`}>

            </div>

            {RenderWindow()}

        </div>
    )
}
