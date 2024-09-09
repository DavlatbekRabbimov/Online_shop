import React from "react";
import {AiFillCheckCircle} from "react-icons/ai";

export const VrfSuccess = () => {

    return(
        <div className={`absolute top-[130px] left-[600px] w-[300px] h-[75px] text-black`}>
            <div className={`flex flex-col justify-center items-center w-full h-full space-y-1 bg-green-500 rounded-lg `}>
                <div className={`flex flex-row justify-center items-center w-[250px] h-[100px] text-center`}>
                    <label className={`mt-2 ml-6 text-[17px] font-inter font-bold text-white`}>
                        SUCCESS VERIFICATION!
                    </label>
                    <AiFillCheckCircle
                        className={`flex text-[50px] text-white`}
                    />
                </div>
            </div>
        </div>
    )
}