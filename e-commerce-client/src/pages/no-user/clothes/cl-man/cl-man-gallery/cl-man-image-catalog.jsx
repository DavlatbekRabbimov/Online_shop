import React from 'react';
import {ClHeartIcon} from "../../cl-category/cl-gallery/cl-heart-icon.jsx";

export const ClImageCatalog = ({images, link}) => {
  return(
      <div className={`clothes-items`}>
        {images && images.map((image, index) => (
            <div key={`image-${index}`} className={`relative`}>
              <img src={image}
                   alt={''}
                   className={`max-w-full h-[250px] rounded-lg hover:scale-95`}
                   onClick={() => window.location.href = link[index]}
              />
              <div className={`absolute top-[10px] right-[10px]`}>
                <ClHeartIcon id={`heart-${index}`} />
              </div>
            </div>
        ))}
      </div>
  )
}