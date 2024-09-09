import axios from "axios";

export function orderCrud(type, data) {
    switch (type) {
        case "saveOrders":
            return axios.post(`http://localhost:8383/api/order/saved`, {...data})
        case "getOrders":
            return axios.get(`http://localhost:8383/api/order/list`)
        case "deleteOrder":
            return axios.delete(`http://localhost:8383/api/order/deleted/${data}`);
        default:
            throw new Error(`Unknown type: ${type}`);
    }
}

export function operationCrud(type, data, data2) {
    switch (type) {
        case "payment":
            return axios.post(`http://localhost:8383/api/payment/${data}`);
        case "deposit":
            return axios.post(`http://localhost:8383/api/deposit/${data}/${data2}`);
        case "withdraw":
            return axios.post(`http://localhost:8383/api/withdraw/${data}/${data2}`);
        default:
            throw new Error(`Unknown type: ${type}`);
    }
}

