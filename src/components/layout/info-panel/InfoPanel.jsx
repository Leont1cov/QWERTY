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

        const [c1, c2, c3, c4, c5, c6, c7] = randomCities

        setCityNames([
            c1.name,
            c2.name,
            c3.name,
            c4.name,
            c5.name,
            c6.name,
            c7.name,
        ])

        const firstCity = await fetchCurrentWeather(
            c1.coordinates.lat,
            c1.coordinates.lon
        )
        const secondCity = await fetchCurrentWeather(
            c2.coordinates.lat,
            c2.coordinates.lon
        )
        const thirdCity = await fetchCurrentWeather(
            c3.coordinates.lat,
            c3.coordinates.lon
        )
        const fourthCity = await fetchCurrentWeather(
            c4.coordinates.lat,
            c4.coordinates.lon
        )
        const fifthCity = await fetchCurrentWeather(
            c5.coordinates.lat,
            c5.coordinates.lon
        )
        const sixthCity = await fetchCurrentWeather(
            c6.coordinates.lat,
            c6.coordinates.lon
        )
        const seventhCity = await fetchCurrentWeather(
            c7.coordinates.lat,
            c7.coordinates.lon
        )

        setCityWeathers([
            firstCity,
            secondCity,
            thirdCity,
            fourthCity,
            fifthCity,
            sixthCity,
            seventhCity,
        ])
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
