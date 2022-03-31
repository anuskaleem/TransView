import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import transactionsReducer from './ducks/transactions'
import transactionDetailReducer from "./ducks/transactionDetail";
import { rootSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    transactions: transactionsReducer,
    transaction: transactionDetailReducer
})

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(reducer,{},applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;