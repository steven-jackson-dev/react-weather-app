import axios from 'axios'

const url = 'https://api.openweathermap.org/data/2.5/weather';
const settings = '&units=metric';
const appId = '&appid=22a7e3afef01d4ef350bfb07c8081860';

export const searchCities = async (searchTerms) => {
const query = `?q=${searchTerms}`;
const apiUrl = `${url}${query}${appId}${settings}`
    try {
        const {data} = await axios.get(apiUrl)
        return data
    } catch (error) {
        console.log("fetchData -> error", error)
    }
}
