import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";
import {sectionAnimation} from "../../../animations/motion.js";
export const TopLeft = () => {

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  });

  return (
      <AnimatePresence>
        {isVisible && (
            <motion.section className={`logo-motion`} {...sectionAnimation("top-left")}>
              <div className={`logo-container`}
                   onClick={() => window.location.href = '/'}
              >
                <img src={`./src/assets/dragon1.png`} alt={'logo'} />
              </div>
              <motion.div className={`logo-motion-title`}
                          initial={{ scale: 0, y: -120 }}
                          animate={{ scale: 1, y: 0 }}
                          exit={{ scale: 0, y: -120 }}
                          transition={
                            {scale: { type: "spring", stiffness: 260, damping: 20 },
                              y: { duration: 0.5 }
                            }
              }
              >
                E-COSMOS
              </motion.div>
            </motion.section>
        )}
      </AnimatePresence>
  );
}
