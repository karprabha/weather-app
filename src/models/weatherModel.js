import { subDays, format } from "date-fns";

const weatherModel = () => {
    const forecastDays = 2;
    const currentDate = new Date();
    const previousDate = subDays(currentDate, 1);
    const formattedPreviousDate = format(previousDate, "yyyy-MM-dd");

    const forecastAPIURL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=${forecastDays}&q=`;
    const historyAPIURL = `https://api.weatherapi.com/v1/history.json?key=${API_KEY}&dt=${formattedPreviousDate}&q=`;

    const fetchWeatherDataFromAPI = async (url) => {
        try {
            const data = await fetch(url, { mode: "cors" });
            const weatherData = await data.json();

            return weatherData;
        } catch (error) {
            throw new Error(error);
        }
    };

    const getWeatherData = async (cityName) => {
        try {
            const forcastData = await fetchWeatherDataFromAPI(
                forecastAPIURL + cityName
            );
            const historyData = await fetchWeatherDataFromAPI(
                historyAPIURL + cityName
            );

            const locationDetails = forcastData.location;
            const weatherToday = forcastData.forecast.forecastday[0];
            const weatherTomorrow = forcastData.forecast.forecastday[1];
            const weatherYesterday = historyData.forecast.forecastday[0];

            return {
                locationDetails,
                weatherToday,
                weatherTomorrow,
                weatherYesterday,
            };
        } catch (error) {
            throw new Error(error);
        }
    };

    return { getWeatherData };
};

export default weatherModel;
