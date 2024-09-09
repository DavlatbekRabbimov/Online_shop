import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {sectionAnimation} from "../../../global/animations/motion.js";
import {ImSwitch} from "react-icons/im";

export const UserTopRight = () => {

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    });

    const logOut = () => {
        window.location.href = 'http://localhost:3001/';
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.section
                    className={`top-right-box`}
                    {...sectionAnimation(`top-right`)}
                >
                    <div className={`top-right-logout-container`}>
                        <ImSwitch className={`text-[45px] hover:text-red-500`}
                                  onClick={logOut}
                        />
                    </div>

                    <motion.div className={`user-top-right-balance-container`}
                                initial={{scale: 0, y: -120}}
                                animate={{scale: 1, y: 0}}
                                exit={{scale: 0, y: -120}}
                                transition={
                                    {
                                        scale: {type: 'spring', stiffness: 260, damping: 20},
                                        y: {duration: 0.5}
                                    }}
                    >
                       LOGOUT
                    </motion.div>
                </motion.section>
            )
            }
        </AnimatePresence>
    );
}
