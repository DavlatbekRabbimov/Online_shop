import React, {useEffect, useState} from "react";
import {FaHeart} from "react-icons/fa";

export const ClHeartIcon = ({ id }) => {

    const [isLiked, setIsLiked] = useState(() => {
        const saved = localStorage.getItem(id);
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        localStorage.setItem(id, JSON.stringify(isLiked));
    }, [isLiked, id]);

    return (
        <FaHeart
            onClick={toggleLike}
            className={`
            w-[30px] h-[30px] cursor-pointer 
            ${isLiked ? 'text-red-500' : 'text-purple-500'} 
            hover:text-purple-300`}
        />
    );
};