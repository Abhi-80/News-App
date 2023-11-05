export const getNewsByApi = async(category = 'all') => {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=62a2c9b6d7e74bf1a5a17e8dbbdb65fa`)

    let data = await response.json();
    
    return data.articles;
}