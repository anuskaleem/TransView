import {call,put,take} from 'redux-saga/effects'
import { setTransactionDetail } from '../../ducks/transactionDetail';
import { requestGetTransactionDetails } from '../requests/transactionDetail';

export function* handleGetTransactionDetail(action) {
    try{
        const response = yield call(requestGetTransactionDetails,action.id);
        const { data } = response;
        yield put(setTransactionDetail(data));
    } catch(error) {
        console.log(error);
    }
}