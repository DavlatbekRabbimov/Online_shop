import React, {useEffect, useState} from 'react';
import {BsFillTrash3Fill} from "react-icons/bs";
import {operationCrud, orderCrud} from "../../crud/Crud.jsx";
import {ErrorMessage, SuccessMessage} from "../../notification/custom-notification.jsx";
import {useProvider} from "../../provider/provider.jsx";

export const BasketWindow = () => {

    const {totalBalance} = useProvider().providing;
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        try{
            const fetchData = async () => {
                const res = await orderCrud("getOrders");
                setAllOrders(res.data);
            }
            fetchData();
        }catch (err){
            ErrorMessage(`Error: Order list is not gotten! - ${err}`);
        }
    }, []);

    const clickDeleteOrder = async (id) => {
        try{
            await orderCrud("deleteOrder", id);
            SuccessMessage('Successfully order is deleted!');
            window.location.reload();
        }catch (err){
            ErrorMessage(`Error: Order is not deleted ${id}`);
        }
    }
    const clickPayment = async (id) => {
        try{
            if (allOrders) {
                allOrders.map(order => {
                    const productPrice = order.productPrice;
                    if (productPrice > totalBalance && totalBalance <= 0){
                        ErrorMessage(`Error: Card balance does not have enough funds!`);
                    }
                });
            }
            await operationCrud("payment", id);
            window.location.reload();
        }catch (err){
            ErrorMessage(`Card balance does not have enough funds! - ${err}`);
        }
    }

    return (
        <div id={`basket`} className={`absolute top-[105px] left-[125px] text-white text-center 
        w-[1285px] h-[600px] bg-gradient-to-tr from-purple-800 to-slate-950 rounded-lg z-50 border-4 border-white`}
        >
            <div className={`grid grid-cols-11 gap-4 p-4 mt-6`}>
                <h1 className={`font-bold`}>Order ID</h1>
                <h1 className={`font-bold`}>Name</h1>
                <h1 className={`font-bold`}>Brand</h1>
                <h1 className={`font-bold`}>Color</h1>
                <h1 className={`font-bold`}>Size</h1>
                <h1 className={`font-bold`}>Order count</h1>
                <h1 className={`font-bold`}>Price</h1>
                <h1 className={`font-bold`}>Photo</h1>
                <h1 className={`font-bold`}>Payment</h1>
                <h1 className={`font-bold`}>Paid</h1>
                <h1 className={`font-bold`}>Delete</h1>
                {allOrders.map(order => (
                    <React.Fragment key={order.id}>
                        <p className={`mt-[15px]`}>{order.id}</p>
                        <p className={`mt-[15px]`}>{order.productName}</p>
                        <p className={`mt-[15px]`}>{order.productBrand}</p>
                        <p className={`mt-[15px]`}>{order.color}</p>
                        <p className={`mt-[15px]`}>{order.size}</p>
                        <p className={`mt-[15px]`}>{order.orderCount}</p>
                        <p className={`mt-[15px]`}>${order.productPrice}</p>
                        <img src={order.image} alt={`image`} className={`ml-8 w-[65px] h-[50px]`}/>
                        <button type={`submit`} className={`mt-[10px] ml-[30px] rounded-full w-[45px] h-[35px] bg-blue-800 hover:bg-blue-600`}
                                onClick={() => clickPayment(order.id)}
                        >
                            Pay
                        </button>
                        <p className={`mt-[15px]`}>{order.paidStatus}</p>
                        <BsFillTrash3Fill className={`mt-[15px] ml-[35px] text-[22px] text-red-700 hover:text-red-500`}
                                          onClick={() => clickDeleteOrder(order.id)}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
