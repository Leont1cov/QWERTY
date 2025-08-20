import { useState, useEffect } from "react"

import WeatherForecast from "../../ui/WeatherForecast"

import fetchCurrentWeather from "../../../api/weatherApi.js"
import weatherType from "../../../data/weatherType.js"
import cities from "../../../data/cities.js"

export default function InfoPanel() {
    const [cityWeathers, setCityWeathers] = useState(Array(7).fill(null))
    const [cityNames, setCityNames] = useState(Array(7).fill(""))

    async function getWeather() {
        const randomCities = getRandomCities()

        setCityNames(randomCities.map((city) => city.name))

        const weatherData = await Promise.all(
            randomCities.map((city) =>
                fetchCurrentWeather(city.coordinates.lat, city.coordinates.lon)
            )
        )

        setCityWeathers(weatherData)
    }

    function getRandomCities() {
        const shuffled = [...cities].sort(() => 0.7 - Math.random())

        return shuffled.slice(0, 7).map((city) => ({
            name: city.city,
            coordinates: city.coordinates,
        }))
    }

    useEffect(() => {
        getWeather()

        const interval = setInterval(getWeather, 15000)

        return () => clearInterval(interval)
    }, [])

    function cityPaths(num) {
        return cityWeathers[num] === null
            ? null
            : cityWeathers[num].current.condition.text
    }

    function cityDegrees(num) {
        return cityWeathers[num] === null
            ? "0"
            : cityWeathers[num].current.temp_c
    }

    const weatherForecasts = cityNames.map((city, i) => (
        <WeatherForecast
            key={i}
            cityName={cityNames[i]}
            weatherIcon={weatherType(cityWeathers[i], cityPaths(i))}
            degrees={cityDegrees(i)}
        />
    ))

    return (
        <div className="infoPanel">
            <div className="infoPanel__weather">{weatherForecasts}</div>

            <div className="infoPanel__stocks"></div>
        </div>
    )
}
