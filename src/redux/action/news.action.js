import { GET_ALL_NEWS_ERROR, GET_ALL_NEWS_START, GET_ALL_NEWS_SUCCESS, GET_CATEGORY_NEWS_ERROR, GET_CATEGORY_NEWS_START, GET_CATEGORY_NEWS_SUCCESS } from "../constant/news.constant";

export const getNewsStart = () => ({
    type: GET_ALL_NEWS_START,
    payload: ''
})

export const getNewsSuccess = (data) => ({
    type: GET_ALL_NEWS_SUCCESS,
    payload: data
})

export const getNewsError = (error) => ({
    type: GET_ALL_NEWS_ERROR,
    payload: error
})

export const getCategoryNewsStart = (slug) => ({
    type: GET_CATEGORY_NEWS_START,
    payload: slug
})

export const getCategoryNewsSuccess = (data) => ({
    type: GET_CATEGORY_NEWS_SUCCESS,
    payload: data
})

export const getCategoryNewsError = (error) => ({
    type: GET_CATEGORY_NEWS_ERROR,
    payload: error
})