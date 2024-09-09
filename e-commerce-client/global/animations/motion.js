import React from 'react';
export const sectionAnimation = (os) => {

    let xPosition, yPosition;

    switch (os) {
        case 'top-left':
            yPosition = -120;
            break
        case 'bottom-right':
            yPosition = 120;
            break
        case 'top-right':
            yPosition = -120;
            break
        case 'bottom-left' :
            yPosition = 120;
            break
        default:
            yPosition = 0;
            xPosition = 0;
    }

  return {
      initial: {
          y: yPosition,
          scale: 0
      },
      animate: {
          x: 0,
          y: 0,
          scale: 1
      },
      exit: {
          x: xPosition,
          y: yPosition,
          scale: 0
      },
      transition: {
          scale: {
              type: 'spring',
              stiffness: 260,
              damping: 20
          },
          delay: 0.2,
          duration: 1,
      }
  }
}
