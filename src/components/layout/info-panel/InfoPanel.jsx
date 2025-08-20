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
    const [sixthCityWeather, setSixthCityWeather] = useState(null)
    const [seventhCityWeather, setSeventhCityWeather] = useState(null)

    const [firstCityName, setFirstCityName] = useState("")
    const [secondCityName, setSecondCityName] = useState("")
    const [thirdCityName, setThirdCityName] = useState("")
    const [fourthCityName, setFourthCityName] = useState("")
    const [fifthCityName, setFifthCityName] = useState("")
    const [sixthCityName, setSixthCityName] = useState("")
    const [seventhCityName, setSeventhCityName] = useState("")

    async function getWeather() {
        const randomCities = getRandomCities()

        const [c1, c2, c3, c4, c5, c6, c7] = randomCities

        setFirstCityName(c1.name)
        setSecondCityName(c2.name)
        setThirdCityName(c3.name)
        setFourthCityName(c4.name)
        setFifthCityName(c5.name)
        setSixthCityName(c6.name)
        setSeventhCityName(c7.name)

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

        setFirstCityWeather(firstCity)
        setSecondCityWeather(secondCity)
        setThirdCityWeather(thirdCity)
        setFourthCityWeather(fourthCity)
        setFifthCityWeather(fifthCity)
        setSixthCityWeather(sixthCity)
        setSeventhCityWeather(seventhCity)
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
    const sixthCityPath =
        sixthCityWeather === null
            ? null
            : sixthCityWeather.current.condition.text
    const seventhCityPath =
        seventhCityWeather === null
            ? null
            : seventhCityWeather.current.condition.text

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

                <WeatherForecast
                    cityName={sixthCityName}
                    weatherIcon={weatherType(sixthCityWeather, sixthCityPath)}
                    degrees={
                        sixthCityWeather === null
                            ? "0"
                            : sixthCityWeather.current.temp_c
                    }
                />

                <WeatherForecast
                    cityName={seventhCityName}
                    weatherIcon={weatherType(
                        seventhCityWeather,
                        seventhCityPath
                    )}
                    degrees={
                        seventhCityWeather === null
                            ? "0"
                            : seventhCityWeather.current.temp_c
                    }
                />
            </div>

            <div className="infoPanel__stocks"></div>
        </div>
    )
}
