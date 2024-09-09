import React, {useEffect, useState} from 'react';
import {BsCart4} from "react-icons/bs";
import {useProvider} from "../../provider/provider.jsx";
import {useGallery} from "../../provider/gallery-provider.jsx";
import {orderCrud} from "../../crud/Crud.jsx";
import {ErrorMessage, SuccessMessage} from "../../notification/custom-notification.jsx";

export const OrderWindow = () => {

    const {productName} = useProvider().providing;
    const [productBrand] = useState('Polo');
    const [color, setColor] = useState('Yellow');
    const [size, setSize] = useState('S');
    const [price, setPrice] = useState(0.0);
    const [count, setCount] = useState(0.0);
    const [orderCount, setOrderCount] = useState(0);
    const [productPrice, setProductPrice] = useState(0.0);
    const [discount, setDiscount] = useState(0.0);
    const {shirtImages} = useGallery().startGallery;

    useEffect(() => {
        let value, priceValue, discountValue = 0.0;
        if (color === 'Yellow' && size === 'S') {
            value = 1;
            priceValue = 10.1;
        }
        if (color === 'Yellow' && size === 'L') {
            value = 2;
            priceValue = 11.2;
        }
        if (color === 'Yellow' && size === 'X') {
            value = 3;
            priceValue = 12.5;
        }
        if (color === 'Yellow' && size === 'XL') {
            value = 4;
            priceValue = 13.8;
        }
        if (color === 'Orange' && size === 'S') {
            value = 5;
            priceValue = 13.4;
            discountValue = 0.15;
        }
        if (color === 'Orange' && size === 'L') {
            value = 6;
            priceValue = 16.4;
        }
        if (color === 'Orange' && size === 'X') {
            value = 7;
            priceValue = 16.3;
        }
        if (color === 'Orange' && size === 'XL') {
            value = 8;
            priceValue = 12.1;
        }
        if (color === 'Blue' && size === 'S') {
            value = 9;
            priceValue = 15.8;
        }
        if (color === 'Blue' && size === 'L') {
            value = 10;
            priceValue = 13.0;
        }
        if (color === 'Blue' && size === 'X') {
            value = 11;
            priceValue = 15.0;
        }
        if (color === 'Blue' && size === 'XL') {
            value = 12;
            priceValue = 18.5;
        }
        if (color === 'Dark blue' && size === 'S') {
            value = 13;
            priceValue = 12.8;
        }
        if (color === 'Dark blue' && size === 'L') {
            value = 14;
            priceValue = 17.4;
        }
        if (color === 'Dark blue' && size === 'X') {
            value = 15;
            priceValue = 13.6;
        }
        if (color === 'Dark blue' && size === 'XL') {
            value = 16;
            priceValue = 11.5;
        }
        setCount(value);
        setPrice(priceValue);
        setDiscount(discountValue);
    }, [color, size]);

    const plus = (e) => {
        e.preventDefault();
        if (orderCount < count) {
            setOrderCount(orderCount + 1);
        }
    }

    const minus = (e) => {
        e.preventDefault();
        if (orderCount < 1) {
            return 0;
        }
        setOrderCount(orderCount - 1);
    }

    useEffect(() => {
            let total = (price * orderCount) - (price * discount);
            if (total < 1) total = 0;
            total = total.toFixed(2);
            const parseNumber = parseFloat(total);
            setProductPrice(parseNumber);
        }
    );

    const clickBasket = async () => {
        let image;
        switch (color) {
            case 'Yellow':
                image = shirtImages[0];
                break;
            case 'Orange':
                image = shirtImages[1];
                break;
            case 'Blue':
                image = shirtImages[2];
                break;
            case 'Dark blue':
                image = shirtImages[3];
                break;
            default:
                image = '';
        }

        const order = {productName, productBrand, color, size, orderCount, productPrice, image}

        try {
            if (order.orderCount <= 0) {
                ErrorMessage(`Error: Order count is 0! Try again!`);
            }
            else {
                await orderCrud("saveOrders", {...order})
                SuccessMessage(`Successfully saved order data!`);
                window.location.reload();
            }

        } catch (err) {
            ErrorMessage(`Error: Not saved data! - ${err}`);
        }
    }

    return (
        <div id={`order-window`} className={`absolute top-[105px] left-[761px] w-[650px] h-[465px] bg-yellow-300 rounded-lg`}>
            <div>
                <div className={`ms1-all-container`}>

                    <div className={`ms1-order-line`}>
                        <div className={`flex flex-row space-x-2`}>
                            <h1 className={`text-white font-poppins font-bold`}>Brand: </h1>
                            <h1 className={`text-yellow-400 font-display`}>{productBrand}</h1>
                        </div>
                        <div className={`flex flex-row space-x-2`}>
                            <h1 className={`text-white font-poppins font-bold`}>Made: </h1>
                            <h1 className={`text-yellow-400 font-display`}>China</h1>
                        </div>
                    </div>

                    <div id={`order-result`} className={`ms1-order-result`}>
                        <div className={`flex flex-col space-x-2 text-center`}>
                            <h1 className={`text-white font-poppins font-bold bg-orange-700`}>Color</h1>
                            <select className={`text-purple-950 font-semibold w-[150px] bg-yellow-300 text-center`}
                                    onChange={e => setColor(e.target.value)}
                            >
                                <option>Yellow</option>
                                <option>Orange</option>
                                <option>Blue</option>
                                <option>Dark blue</option>
                            </select>
                        </div>
                        <div className={`flex flex-col space-x-2 text-center`}>
                            <h1 className={`text-white font-poppins font-bold bg-orange-700`}>Size</h1>
                            <select className={`text-purple-950 font-semibold w-[150px] bg-yellow-300 text-center`}
                                    onChange={e => setSize(e.target.value)}
                            >
                                <option>S</option>
                                <option>L</option>
                                <option>X</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>

                    <div id={`order-calculator`} className={`flex flex-row w-full h-full p-4`}>
                        <div className={`flex flex-col space-x-2 text-center w-[400px] h-[100px] mt-2`}>
                            <h1 className={`text-black font-poppins font-bold`}>Product price</h1>
                            <p className={`text-purple-950 font-semibold text-[20px]`}>
                                ${price}
                            </p>
                        </div>
                        <div className={`flex flex-col space-x-2 text-center w-[400px] h-[100px] mt-2`}>
                            <h1 className={`text-black font-poppins font-bold`}>Discount</h1>
                            <p className={`text-purple-950 font-semibold text-[20px]`}>
                                {discount * 100}%
                            </p>
                        </div>
                        <div className={`flex flex-col space-x-2 text-center w-[400px] h-[100px] mt-2`}>
                            <h1 className={`text-black font-poppins font-bold`}>Availability</h1>
                            <p className={`text-purple-950 font-semibold text-[20px]`}>
                                {count}
                            </p>
                        </div>
                        <div className={`flex flex-col space-x-2 text-center w-[400px] h-[100px]  mt-2`}>
                            <h1 className={`text-black font-poppins font-bold`}>Order count</h1>
                            <div className={`flex flex-row`}>
                                <button type={`button`} onClick={minus}
                                        className={`text-center text-purple-950 font-semibold w-[50px] text-[20px]`}>-
                                </button>
                                <p className={`text-center text-purple-950 font-semibold w-[50px] text-[20px]`}>
                                    {orderCount}
                                </p>
                                <button type={`button`} onClick={plus}
                                        className={`text-center text-purple-950 font-semibold w-[50px] text-[20px]`}>+
                                </button>
                            </div>
                        </div>
                        <div className={`flex flex-col space-x-2 text-center w-[400px] h-[100px] mt-2`}>
                            <h1 className={`text-black font-poppins font-bold`}>Order Price</h1>
                            <p className={`text-purple-950 font-semibold text-[20px]`}>
                                ${productPrice}
                            </p>
                        </div>
                    </div>

                    <div id={`basket-adder`} className={`flex justify-center items-center`}>
                        <button type={`button`} className={`m1-order-basket-button`} onClick={clickBasket}>
                            <div className={`flex flex-row justify-center items-center`}>
                                <BsCart4/>
                                <h1 className={`ml-2 font-bold`}>Basket</h1>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
}
