import axios from "axios"

const API_CURRENT_URL = 'https://api.openweathermap.org/data/2.5/weather'
// const API_HOURLY_URL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly'

export const getCurrentWeatherByCity = async (location) => {
    try {
        const resp = await axios.get(API_CURRENT_URL, {
            params: {
                q: location.city,
                appid: import.meta.env.APPID_KEY
            }
        })
        console.log(resp)
        return resp;

    } catch (err) {
        console.log(err)
    }
}