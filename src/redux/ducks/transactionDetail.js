export const GET_TRANSACTION_DETAIL = "getTransactionDetail";
const SET_TRANSACTION_DETAIL = "setTransactionDetail";

export const getTransactionDetails = (id)=>({
    type: GET_TRANSACTION_DETAIL,
    id
})

export const setTransactionDetail = (transaction)=>({
    type: SET_TRANSACTION_DETAIL,
    transaction
})

const initialState = {
    transaction: undefined
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case SET_TRANSACTION_DETAIL:
            const {transaction} = action
            return {...state, transaction};
        default:
            return state;
    }
} 

