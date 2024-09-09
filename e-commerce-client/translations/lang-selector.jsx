import React from "react";
export const LangSelector = ({children,...props}) => {

    return (
        <div>
            <select
                className="
                appearance-none w-full rounded-lg
                text-white text-[20px] text-center
                bg-purple-700 hover:bg-purple-500 border-none outline-none"
                {...props}
            >
                {children}
            </select>
        </div>
    )
}
export const Option = ({name,flag, ...props})=> {
    return(
        <option
            {...props}>
            {flag}
            {name}
        </option>
    )
}
