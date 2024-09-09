import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";
import {sectionAnimation} from "../../../../../../global/animations/motion.js";
export const ClothesTopLeft = () => {

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  });

  return (
      <AnimatePresence>
        {isVisible && (
            <motion.section
                className={`
                absolute -top-[120px] w-[175px] h-[275px] rounded-lg left-[37px] 
                bg-gradient-to-r from-purple-700 via-violet-800 to-purple-900 opacity-80 brightness-125
                `}
                {...sectionAnimation("top-left")}
            >
              <div className={`absolute top-[150px] left-[55px] w-[60px] h-[60px]`}>
                <img src={`./src/assets/dragon1.png`} alt={'logo'} />
              </div>
              <motion.div className={`
              absolute top-[215px] left-[32px] text-white text-[20px] font-inter font-bold cursor-pointer
              `}
                          initial={{ scale: 0, y: -120 }}
                          animate={{ scale: 1, y: 0 }}
                          exit={{ scale: 0, y: -120 }}
                          transition={
                            {scale: { type: "spring", stiffness: 260, damping: 20 },
                              y: { duration: 0.5 }
                            }}
              >
                E-COSMOS
              </motion.div>
            </motion.section>

        )}
      </AnimatePresence>
  );
}
