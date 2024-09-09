import React from 'react';

export const Heart = ({children}) => {
  return (
    <div id={`heart`}
         className={`heart-container`}>
      {children}
    </div>
  );
}
