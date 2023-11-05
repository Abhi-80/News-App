import { GET_ALL_NEWS_SUCCESS, GET_CATEGORY_NEWS_SUCCESS } from "../constant/news.constant";
const initialState = {
    news: [],
    categoryNews: [],
    category: [
        "war",
        "government",
        "politics",
        "education",
        "health",
        "environment",
        "economy",
        "business",
        "fashion",
        "entertainment",
        "sports"
    ]
}


const NewsReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_ALL_NEWS_SUCCESS:
            return {
                ...state,
                news: [...action.payload]
            }
            
        case GET_CATEGORY_NEWS_SUCCESS:
            return {
                ...state,
                categoryNews: [...action.payload]
            }    
    
        default:
            return state;
    }
}

export default NewsReducer;