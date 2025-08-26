import { useState, useEffect } from "react"

import WeatherForecast from "../../ui/WeatherForecast"
import Stock from "../../ui/Stock.jsx"

import fetchCurrentWeather from "../../../api/weatherApi.js"
import fetchStocks from "../../../api/stocksApi.js"
import weatherType from "../../../data/weatherType.js"
import cities from "../../../data/cities.js"
import companies from "../../../data/companies.js"

export default function InfoPanel() {
    const cityNumber = 7
    const stockNumber = 7

    const [cityWeathers, setCityWeathers] = useState(
        Array(cityNumber).fill(null)
    )
    const [cityNames, setCityNames] = useState(Array(cityNumber).fill(""))

    const [stockCharts, setStockCharts] = useState(
        Array(stockNumber).fill(null)
    )
    const [stockNames, setStockNames] = useState(Array(stockNumber).fill(""))

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

    async function getStocks() {
        const { dateStart, dateEnd } = getDateRange()

        const randomCompanies = getRandomCompanies()

        setStockNames(randomCompanies.map((company) => company.symbol))

        const stocksData = await Promise.all(
            randomCompanies.map((company) =>
                fetchStocks(company.symbol, dateStart, dateEnd)
            )
        )

        setStockCharts(stocksData)
    }

    function getDateRange() {
        const today = new Date()
        const dateEnd = `${today.getFullYear()}-${String(
            today.getMonth() + 1
        ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`

        const lastMonth = new Date(today)
        lastMonth.setMonth(lastMonth.getMonth() - 1)
        const dateStart = `${lastMonth.getFullYear()}-${String(
            lastMonth.getMonth() + 1
        ).padStart(2, "0")}-${String(lastMonth.getDate()).padStart(2, "0")}`

        return { dateStart, dateEnd }
    }

    function getRandomCities() {
        const num = Number(`${0}.${cityNumber}`)
        const shuffled = [...cities].sort(() => num - Math.random())
        const { dateStart, dateEnd } = getDateRange()

        return shuffled.slice(0, cityNumber).map((city) => ({
            name: city.city,
            coordinates: city.coordinates,
            dateStart,
            dateEnd,
        }))
    }

    function getRandomCompanies() {
        const num = Number(`${0}.${stockNumber}`)
        const shuffled = [...companies].sort(() => num - Math.random())

        return shuffled.slice(0, stockNumber).map((company) => ({
            name: company.name,
            symbol: company.symbol,
        }))
    }

    useEffect(() => {
        function renderApis() {
            getWeather()
            // getStocks()
        }

        renderApis()

        const interval = setInterval(renderApis, 15000)

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

    function stockName(i) {
        return !stockCharts[i] ? "Unset" : stockCharts[i].Metadata.Symbol
    }

    function companyNamePath(i) {
        if (!stockCharts[i]) return "Unset"

        const match = companies.find(
            (company) => company.symbol === stockCharts[i].Metadata.Symbol
        )

        return match ? match.name : "Unset"
    }

    function currentPrice(i) {
        return !stockCharts[i]
            ? "0"
            : `$${
                  String(
                      stockCharts[i].Results[stockCharts[i].Results.length - 1]
                          .Close
                  ).split(".")[0]
              }`
    }

    function percentageDifference(i) {
        if (!stockCharts[i]) return "0%"

        const currentDayPrice =
            stockCharts[i].Results[stockCharts[i].Results.length - 1].Close
        const previousDayPrice =
            stockCharts[i].Results[stockCharts[i].Results.length - 2].Close

        const difference =
            ((currentDayPrice - previousDayPrice) / previousDayPrice) * 100

        return `${difference.toFixed(2)}%`
    }

    function up(i) {
        if (!stockCharts[i]) return null

        const currentDayPrice =
            stockCharts[i].Results[stockCharts[i].Results.length - 1].Close
        const previousDayPrice =
            stockCharts[i].Results[stockCharts[i].Results.length - 2].Close

        const difference =
            ((currentDayPrice - previousDayPrice) / previousDayPrice) * 100

        return difference.toFixed(2) > 0 ? true : false
    }

    const weatherForecasts = cityNames.map((city, i) => (
        <WeatherForecast
            key={i}
            cityName={cityNames[i]}
            weatherIcon={weatherType(cityWeathers[i], cityPaths(i))}
            degrees={cityDegrees(i)}
        />
    ))

    const stocks = stockNames.map((stock, i) => (
        <Stock
            // key={i}
            // stockName={stockName(i)}
            // companyName={companyNamePath(i)}
            // currentPrice={currentPrice(i)}
            // differencePercentage={percentageDifference(i)}
            // up={up(i)}

            key={i}
            stockName={"AAPL"}
            companyName={"Apple"}
            currentPrice={"$1,235"}
            differencePercentage={"2%"}
            up={true}
        />
    ))

    return (
        <div className="infoPanel">
            <div className="infoPanel__weather">{weatherForecasts}</div>

            <div className="infoPanel__stocks">{stocks}</div>
        </div>
    )
}
