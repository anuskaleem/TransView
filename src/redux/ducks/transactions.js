export const GET_TRANSACTIONS = "getTransactions";
const SET_TRANSACTIONS = "setTransactions";

export const getTransactions = ()=>({
    type: GET_TRANSACTIONS
})

export const setTransactions = (transactions)=>({
    type: SET_TRANSACTIONS,
    transactions
})

const initialState = {
    transactions: undefined
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case SET_TRANSACTIONS:
            const {transactions} = action
            return {...state, transactions};
        default:
            return state;
    }
} 