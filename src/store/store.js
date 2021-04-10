import {createStore, applyMiddleware, combineReducers} from 'redux';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import rootSaga from "../saga/saga";
import categoryReducer from './category/reducers';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({
        category: categoryReducer, // 기존 코드에서 변경된 부분
    }), composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    ),
);

const axiosInstance = axios.create({
    baseURL: '통신해야 할 서버 주소',
});

sagaMiddleware.run(rootSaga, axiosInstance);