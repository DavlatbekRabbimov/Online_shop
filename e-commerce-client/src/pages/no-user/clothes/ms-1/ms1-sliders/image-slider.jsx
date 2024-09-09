import React from 'react';

export const ImageSlider = ({images, activeImageIndex, prev, next}) => {
  return (
      <div className={`ms-1-slider-central-box`}>
          <div className={`relative`}>

              {images && images.map((image, index) => (
                  <div id={`image-slider`} key={index}>
                      <img src={image}
                           alt={''}
                           className={`image-slider ${index === activeImageIndex ? 'opacity-100' : 'opacity-0'}
                 `}
                      />
                  </div>
              ))}

              <button type="button"
                      onClick={prev}
                      className={`ms-1-central-prev-bottom`}>
                    <span className={`ms-1-central-prev-span`}>
                        <svg className={`ms-1-central-prev-svg`}
                             aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 6 10">
                            <path stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Prev</span>
                    </span>
              </button>

              <button type="button"
                      onClick={next}
                      className={`ms-1-central-next-bottom`}>
                    <span className={`ms-1-central-next-span`}>
                        <svg className={`ms-1-central-next-svg`}
                             aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 6 10">
                            <path stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
              </button>

          </div>

      </div>
  );
}
