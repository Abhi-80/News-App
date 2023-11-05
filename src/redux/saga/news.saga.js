import { put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_NEWS_START, GET_CATEGORY_NEWS_START } from '../constant/news.constant';
import { getNewsByApi } from '../service/news.service';
import { getNewsError, getNewsSuccess, getCategoryNewsSuccess, getCategoryNewsError } from '../action/news.action'; // Import the necessary action functions

function* getNews() {
    try {
        let data = yield getNewsByApi();
        console.log(data);
        yield put(getNewsSuccess(data))
    } catch (error) {
        yield put(getNewsError(error.message))
    }
}

function* getCategoryNews({ payload }) {
    try {
        let data = yield getNewsByApi(payload);
        yield put(getCategoryNewsSuccess(data))
    } catch (error) {
        yield put(getCategoryNewsError(error.message))
    }
}

export function* news() {
    yield takeLatest(GET_ALL_NEWS_START, getNews)
    yield takeLatest(GET_CATEGORY_NEWS_START, getCategoryNews)
}
