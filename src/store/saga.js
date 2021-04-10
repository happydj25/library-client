import {createRequestInstance, watchRequests} from 'redux-saga-requests';
import {createDriver} from "redux-saga-requests-axios";

function* onRequestSaga(request, action) {
    request.headers = {
        ...request.headers,
        'Content-Type': 'application/json',
    };
    return request;
}

function* onSuccessSaga(response, action) {
    return response;
}

function* onErrorSaga(error, action) {
    return {error};
}

function* onAbortSaga(action) {
}

export default function* rootSaga(axiosInstance) {
    yield createRequestInstance({
        driver: createDriver(axiosInstance),
        onRequest: onRequestSaga,
        onSuccess: onSuccessSaga,
        onError: onErrorSaga,
        onAbort: onAbortSaga,
    });
    yield watchRequests();
}