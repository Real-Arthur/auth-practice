import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems(action) {
    console.log('in fetchItems saga with', action);

    let response = yield axios({
        method: 'GET',
        url: '/api/shelf'
    });

    console.log('back from GET with:', response.data);

    yield put({
        type: 'SET_ITEMS',
        payload: response.data
    })
}

function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
}

export default itemsSaga;