import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {sectionAnimation} from "../../../animations/motion.js";
import {ImSwitch} from "react-icons/im";
import {useProvider} from "../../../provider/provider.jsx";

export const TopRight = () => {

    const [isVisible, setVisible] = useState(false);
    const {openWindowAuth} = useProvider().providing;


    useEffect(() => {
        setVisible(true);
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.section
                    className={`top-right-box`}
                    {...sectionAnimation(`top-right`)}
                >
                    <div className={`top-right-creator-icon`}>
                        <ImSwitch className={`text-[45px] hover:text-green-500`}
                                  onClick={openWindowAuth}
                        />
                    </div>
                    <motion.div className={`top-right-creator-container`}
                                initial={{scale: 0, y: -120}}
                                animate={{scale: 1, y: 0}}
                                exit={{scale: 0, y: -120}}
                                transition={
                                    {
                                        scale: {type: 'spring', stiffness: 260, damping: 20},
                                        y: {duration: 0.5}
                                    }}
                    >
                        CREATE ACCOUNT
                    </motion.div>
                </motion.section>
            )
            }
        </AnimatePresence>
    );
}
