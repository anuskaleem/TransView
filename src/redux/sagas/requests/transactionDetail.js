import axios from "axios";
import { baseUrl } from "./endpoints";

export function requestGetTransactionDetails(id){
    return axios.request({
        method: 'GET',
        url: baseUrl+"transactions/"+id
    })
}