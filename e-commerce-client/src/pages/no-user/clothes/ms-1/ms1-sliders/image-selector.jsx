import React from 'react';

export const ImageSelector = ({images, setActiveImageIndex}) => {
  return (
      <div className={`image-selector-container`}>
          {
              images.map((image, index) => (
                      <div id={`image-selector`}
                           key={`image-selector-${index}`}
                           className={`image-selector`}
                           onClick={() => setActiveImageIndex(index)}
                      >
                          <img tabIndex={index}
                               src={image}
                               alt={``}

                          />
                      </div>
                  )
              )
          }
      </div>
  );
}
