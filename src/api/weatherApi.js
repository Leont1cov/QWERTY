const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = "https://api.weatherapi.com/v1"

export default async function fetchForecast(lat, lon) {
    const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Failed to fetch from the API")
    }

    return response.json()
}
