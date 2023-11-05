import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import NewsReducer from "../reducer/news.reducer";
import { news } from "../saga/news.saga";

let sagaMiddleware = createSagaMiddleware();

let store = configureStore({
    reducer: NewsReducer,
    middleware: [sagaMiddleware],
    devtools: true
})

sagaMiddleware.run(news)

export default store;