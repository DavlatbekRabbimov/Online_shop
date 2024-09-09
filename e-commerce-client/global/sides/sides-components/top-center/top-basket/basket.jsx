import React from 'react';

export const Basket = ({children}) => {
  return (
    <div id={`basket`}
         className={`basket-container`}>
        {children}
    </div>
  );
}
