import React from "react";
import {MdOutlineError} from "react-icons/md";

export const VrfError = () => {

    return(
        <div className={`absolute top-[130px] left-[600px] w-[300px] h-[75px] text-black`}>
            <div className={`flex flex-col justify-center items-center w-full h-full space-y-1 bg-red-700 rounded-lg `}>
                <div className={`flex flex-row justify-center items-center w-[250px] h-[100px] text-center space-x-2`}>
                    <label className={`mt-2 ml-6 text-[16px] font-inter font-bold text-white`}>
                        ERROR VERIFICATION!
                    </label>
                    <MdOutlineError
                        className={`flex text-[50px] text-white`}
                    />
                </div>
            </div>
        </div>
    )
}