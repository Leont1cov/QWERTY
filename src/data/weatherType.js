import sun from "../assets/weather-icons/sun.png"
import clouds from "../assets/weather-icons/clouds.png"
import cloudySun from "../assets/weather-icons/cloudy-sun.png"
import heavyRain from "../assets/weather-icons/heavy-rain.png"
import snow from "../assets/weather-icons/snow.png"
import storm from "../assets/weather-icons/storm.png"

export default function weatherType(weather, path) {
    if (weather !== null) {
        if (
            path === "Sunny" ||
            path === "Sunny " ||
            path === "Clear" ||
            path === "Clear "
        ) {
            return sun
        } else if (
            path === "Partly Cloudy" ||
            path === "Partly Cloudy " ||
            path === "Partly cloudy"
        ) {
            return cloudySun
        } else if (
            path === "Cloudy" ||
            path === "Cloudy " ||
            path === "Overcast" ||
            path === "Overcast " ||
            path === "Mist" ||
            path === "Mist " ||
            path === "Fog" ||
            path === "Fog " ||
            path === "Freezing fog" ||
            path === "Freezing fog "
        ) {
            return clouds
        } else if (
            path === "Patchy freezing drizzle nearby" ||
            path === "Patchy rain nearby" ||
            path === "Patchy light drizzle" ||
            path === "Light drizzle" ||
            path === "Freezing drizzle" ||
            path === "Heavy freezing drizzle" ||
            path === "Patchy light rain" ||
            path === "Light rain" ||
            path === "Moderate rain at times" ||
            path === "Moderate rain" ||
            path === "Heavy rain at times" ||
            path === "Heavy rain" ||
            path === "Light freezing rain" ||
            path === "Moderate or heavy freezing rain" ||
            path === "Light rain shower" ||
            path === "Moderate or heavy rain shower" ||
            path === "Torrential rain shower " ||
            path === "Patchy freezing drizzle nearby " ||
            path === "Patchy rain nearby " ||
            path === "Patchy light drizzle " ||
            path === "Light drizzle " ||
            path === "Freezing drizzle " ||
            path === "Heavy freezing drizzle " ||
            path === "Patchy light rain " ||
            path === "Light rain " ||
            path === "Moderate rain at times " ||
            path === "Moderate rain " ||
            path === "Heavy rain at times " ||
            path === "Heavy rain " ||
            path === "Light freezing rain " ||
            path === "Moderate or heavy freezing rain " ||
            path === "Light rain shower " ||
            path === "Moderate or heavy rain shower " ||
            path === "Torrential rain shower" ||
            path === "Torrential rain shower "
        ) {
            return heavyRain
        } else if (
            path === "Thundery outbreaks in nearby" ||
            path === "Patchy light rain in area with thunder" ||
            path === "Moderate or heavy rain in area with thunder" ||
            path === "Moderate or heavy rain with thunder" ||
            path === "Patchy light snow in area with thunder" ||
            path === "Moderate or heavy snow in area with thunder" ||
            path === "Moderate or heavy snow with thunder" ||
            path === "Thundery outbreaks in nearby " ||
            path === "Patchy light rain in area with thunder " ||
            path === "Patchy light rain with thunder" ||
            path === "Moderate or heavy rain in area with thunder " ||
            path === "Patchy light snow in area with thunder " ||
            path === "Moderate or heavy snow in area with thunder "
        ) {
            return storm
        } else if (
            path === "Blizzard" ||
            path === "Light snow" ||
            path === "Blowing snow" ||
            path === "Patchy snow nearby" ||
            path === "Patchy sleet nearby" ||
            path === "Light sleet" ||
            path === "Light sleet showers" ||
            path === "Moderate or heavy sleet" ||
            path === "Moderate or heavy sleet showers" ||
            path === "Light snow showers" ||
            path === "Moderate or heavy snow showers" ||
            path === "Light showers of ice pellets" ||
            path === "Moderate or heavy showers of ice pellets" ||
            path === "Patchy light snow" ||
            path === "Patchy moderate snow" ||
            path === "Moderate snow" ||
            path === "Patchy heavy snow" ||
            path === "Heavy snow" ||
            path === "Ice pellets" ||
            path === "Blizzard " ||
            path === "Light snow " ||
            path === "Blowing snow " ||
            path === "Patchy snow nearby " ||
            path === "Patchy sleet nearby " ||
            path === "Light sleet " ||
            path === "Light sleet showers " ||
            path === "Moderate or heavy sleet " ||
            path === "Moderate or heavy sleet showers " ||
            path === "Light snow showers " ||
            path === "Moderate or heavy snow showers " ||
            path === "Light showers of ice pellets " ||
            path === "Moderate or heavy showers of ice pellets " ||
            path === "Patchy light snow " ||
            path === "Patchy moderate snow " ||
            path === "Moderate snow " ||
            path === "Patchy heavy snow " ||
            path === "Heavy snow " ||
            path === "Ice pellets "
        ) {
            return snow
        }
    } else {
        return sun
    }
}
