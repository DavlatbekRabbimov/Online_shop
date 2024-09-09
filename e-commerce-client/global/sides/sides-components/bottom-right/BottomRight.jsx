import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {sectionAnimation} from "../../../animations/motion.js";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
export const BottomRight = () => {

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  });

  return (
      <AnimatePresence>
        {isVisible && (
            <motion.section
                className={`bottom-right-box`}
                {...sectionAnimation("bottom-right")}
            >
              <div className={`absolute bottom-[35px] right-[55px] w-[60px] h-[60px] bg-purple-950 hover:bg-white hover:text-purple-950 rounded-full`}>
                <MdEmail className={`absolute bottom-[10px] right-[10px] w-[40px] h-[40px]`}/>
              </div>

            </motion.section>
        )}
      </AnimatePresence>
  );
}
