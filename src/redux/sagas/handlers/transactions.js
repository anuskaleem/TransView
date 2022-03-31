import {call,put} from 'redux-saga/effects'
import { setTransactions } from '../../ducks/transactions';
import { requestGetTransactions } from '../requests/transactions';

export function* handleGetTransactions(action) {
    try{
        const response = yield call(requestGetTransactions);
        const { data } = response;
        yield put(setTransactions(data));
    } catch(error) {
        console.log(error);
    }
}