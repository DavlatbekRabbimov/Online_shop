import React, {useEffect, useState} from "react"

export const HAdvertisement = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        'src/assets/1.jpg',
        'src/assets/2.jpg',
        'src/assets/3.jpg',
        'src/assets/4.jpg',
        'src/assets/5.jpg'
    ]

    const imageSlider = [
        images.map((images, index) => (
            <img key={index} src={images} alt={''}
                 className={`absolute w-full h-[165px] object-cover duration-500 rounded-lg
                 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}
                 `}
            />
        ))
    ]
    const prev = () => {
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
    const next = () => {
        setActiveIndex((activeIndex + 1) % images.length);
    }

    useEffect(() => {
        const interval = setInterval(next, 3000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className={`absolute top-[105px] left-[250px] w-2/3 h-[170px] rounded-lg 
        border-t-4 border-t-solid border-purple-700
        `}>
            <div className={`relative`}>
                {images && imageSlider}
                <button type="button"
                        onClick={prev}
                        className="absolute top-[75px] start-0 z-30
                        flex items-center justify-center h-full px-4 cursor-pointer
                        group focus:outline-none"
                >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full
              bg-white/30 dark:bg-purple-800/30 group-hover:bg-white/50 dark:group-hover:bg-purple-800/60
              group-focus:ring-4 group-focus:ring-white group-focus:outline-none
              dark:group-focus:ring-purple-800/70">

            <svg className="w-4 h-4 text-white dark:text-purple-950 rtl:rotate-180"
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
                        className="absolute top-[75px] end-0 z-30
                        flex items-center justify-center h-full px-4
                        cursor-pointer group focus:outline-none">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full
                    bg-white/30 dark:bg-purple-800/30 group-hover:bg-white/50 dark:group-hover:bg-purple-800/60
                    group-focus:ring-4 group-focus:ring-white group-focus:outline-none
                    dark:group-focus:ring-purple-800/70">
            <svg className="w-4 h-4 text-white dark:text-purple-950 rtl:rotate-180"
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
            <div className="absolute top-[175px] left-[450px] flex justify-center space-x-8">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full 
                        ${index === activeIndex ? 'bg-purple-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    )
}