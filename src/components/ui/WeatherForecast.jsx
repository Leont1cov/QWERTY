export default function WeatherForecast({ cityName, weatherIcon, degrees }) {
    return (
        <div className={`weatherForecast`}>
            <span className="weatherForecast__cityName">{cityName}</span>
            <img
                src={weatherIcon}
                alt="Weather icon"
                className="weatherForecast__weatherIcon"
            />
            <span className="weatherForecast__degrees">{degrees}°C</span>
        </div>
    )
}
