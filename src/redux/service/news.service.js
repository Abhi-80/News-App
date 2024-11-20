export const getNewsByApi = async(category = 'all') => {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=4db2ae1d734049ffa25e10379ce3c86d`)

    let data = await response.json();
    
    return data.articles;
}



