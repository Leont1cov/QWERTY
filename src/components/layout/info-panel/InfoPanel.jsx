import { useState, useEffect } from "react"

import WeatherForecast from "../../ui/WeatherForecast"

import fetchCurrentWeather from "../../../api/weatherApi.js"
import weatherType from "../../../data/weatherType.js"
import cities from "../../../data/cities.js"

export default function InfoPanel() {
    const [firstCityWeather, setFirstCityWeather] = useState(null)
    const [secondCityWeather, setSecondCityWeather] = useState(null)
    const [thirdCityWeather, setThirdCityWeather] = useState(null)
    const [fourthCityWeather, setFourthCityWeather] = useState(null)
    const [fifthCityWeather, setFifthCityWeather] = useState(null)

    const [firstCityName, setFirstCityName] = useState("")
    const [secondCityName, setSecondCityName] = useState("")
    const [thirdCityName, setThirdCityName] = useState("")
    const [fourthCityName, setFourthCityName] = useState("")
    const [fifthCityName, setFifthCityName] = useState("")

    async function getWeather() {
        const randomCities = getRandomCities()

        const [c1, c2, c3, c4, c5] = randomCities

        setFirstCityName(c1.name)
        setSecondCityName(c2.name)
        setThirdCityName(c3.name)
        setFourthCityName(c4.name)
        setFifthCityName(c5.name)

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

        setFirstCityWeather(firstCity)
        setSecondCityWeather(secondCity)
        setThirdCityWeather(thirdCity)
        setFourthCityWeather(fourthCity)
        setFifthCityWeather(fifthCity)
    }

    function getRandomCities() {
        const shuffled = [...cities].sort(() => 0.5 - Math.random())

        return shuffled.slice(0, 5).map((city) => ({
            name: city.city,
            coordinates: city.coordinates,
        }))
    }

    useEffect(() => {
        getWeather()

        const interval = setInterval(getWeather, 10000)

        return () => clearInterval(interval)
    }, [])

    const firstCityPath =
        firstCityWeather === null
            ? null
            : firstCityWeather.current.condition.text
    const secondCityPath =
        secondCityWeather === null
            ? null
            : secondCityWeather.current.condition.text
    const thirdCityPath =
        thirdCityWeather === null
            ? null
            : thirdCityWeather.current.condition.text
    const fourthCityPath =
        fourthCityWeather === null
            ? null
            : fourthCityWeather.current.condition.text
    const fifthCityPath =
        fifthCityWeather === null
            ? null
            : fifthCityWeather.current.condition.text

    return (
        <div className="infoPanel">
            <div className="infoPanel__weather">
                <WeatherForecast
                    cityName={firstCityName}
                    weatherIcon={weatherType(firstCityWeather, firstCityPath)}
                    degrees={
                        firstCityWeather === null
                            ? "0"
                            : firstCityWeather.current.temp_c
                    }
                />

                <WeatherForecast
                    cityName={secondCityName}
                    weatherIcon={weatherType(secondCityWeather, secondCityPath)}
                    degrees={
                        secondCityWeather === null
                            ? "0"
                            : secondCityWeather.current.temp_c
                    }
                />

                <WeatherForecast
                    cityName={thirdCityName}
                    weatherIcon={weatherType(thirdCityWeather, thirdCityPath)}
                    degrees={
                        thirdCityWeather === null
                            ? "0"
                            : thirdCityWeather.current.temp_c
                    }
                />

                <WeatherForecast
                    cityName={fourthCityName}
                    weatherIcon={weatherType(fourthCityWeather, fourthCityPath)}
                    degrees={
                        fourthCityWeather === null
                            ? "0"
                            : fourthCityWeather.current.temp_c
                    }
                />

                <WeatherForecast
                    cityName={fifthCityName}
                    weatherIcon={weatherType(fifthCityWeather, fifthCityPath)}
                    degrees={
                        fifthCityWeather === null
                            ? "0"
                            : fifthCityWeather.current.temp_c
                    }
                />
            </div>

            <div className="infoPanel__stocks"></div>
        </div>
    )
}
