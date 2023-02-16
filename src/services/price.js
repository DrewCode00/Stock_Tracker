


const API_KEY = process.env.REACT_APP_API_KEY

const getPrice =async (stock) => {
    const response =await fetch('https://cloud.iexapis.com/stable/stock/${stock}/quote/latestPrice?token=${API_KEY}`')

    return response.text()
}



export default getPrice
