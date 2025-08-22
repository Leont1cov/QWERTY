const API_KEY = import.meta.env.VITE_STOCKS_API_KEY
const BASE_URL = "https://apistocks.p.rapidapi.com/daily"

export default async function fetchStocks(symbol, dateStart, dateEnd) {
    const url = `${BASE_URL}?symbol=${symbol}&dateStart=${dateStart}&dateEnd=${dateEnd}`
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "apistocks.p.rapidapi.com",
        },
    }

    try {
        const response = await fetch(url, options)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}
