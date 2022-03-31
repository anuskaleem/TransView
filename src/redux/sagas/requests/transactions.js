import axios from "axios";
import { baseUrl } from "./endpoints";

export function requestGetTransactions(){
    return axios.request({
        method: 'GET',
        url: baseUrl+"transactions"
    })
}