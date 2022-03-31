import { takeLatest,all,fork } from "redux-saga/effects";
import { GET_TRANSACTIONS } from "../ducks/transactions";
import { handleGetTransactions } from "./handlers/transactions";
import { GET_TRANSACTION_DETAIL } from "../ducks/transactionDetail";
import { handleGetTransactionDetail } from "./handlers/transactionDetail";

function* transactionsWatcherSaga() {
    yield takeLatest(GET_TRANSACTIONS, handleGetTransactions);
}

function* transactionDetailsWatcherSaga() {
    yield takeLatest(GET_TRANSACTION_DETAIL, handleGetTransactionDetail);
}

export function* rootSaga() {
    yield all([
      fork(transactionsWatcherSaga),
      fork(transactionDetailsWatcherSaga)
      // ... more watchers will be here...
    ]);
  }