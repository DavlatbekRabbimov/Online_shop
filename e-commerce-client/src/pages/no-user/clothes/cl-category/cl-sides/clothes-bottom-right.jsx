import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {sectionAnimation} from "../../../../../../global/animations/motion.js";
export const ClothesBottomRight = () => {

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  });

  return (
      <AnimatePresence>
        {isVisible && (
            <motion.section
                className={`
                absolute -bottom-[1px] right-[37px] w-[175px] h-[150px] rounded-lg 
                bg-gradient-to-r from-purple-700 via-violet-800 to-purple-900 opacity-80 brightness-125
                `}
                {...sectionAnimation("bottom-right")}
            >
            </motion.section>
        )}
      </AnimatePresence>
  );
}
