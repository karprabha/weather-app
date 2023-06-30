const weatherView = () => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let weatherData;
    const form = document.querySelector("form");

    const resetForm = () => form.reset();

    const getFormData = () => {
        const formData = {
            cityName: document.getElementById("city-search").value,
        };
        return formData;
    };

    const getDayName = (date) => {
        const newDate = new Date(date);
        return days[newDate.getDay()];
    };

    const updateWeatherTodaySummary = () => {
        const { date, day } = weatherData.weatherToday;
        const { name, region, country } = weatherData.locationDetails;

        const dayName = getDayName(date);
        const avgTemp = day.avgtemp_c;
        const { text: condition, icon: conditionImg } = day.condition;

        document.querySelector(".summary .description").textContent = condition;
        document.querySelector(".summary .temperature").textContent = avgTemp;
        document.querySelector(".summary img").src = conditionImg;

        document.querySelector(
            ".summary .location"
        ).textContent = `${name}, ${region}, ${country}`;

        document.querySelector(
            ".summary .date-info"
        ).textContent = `${dayName}, ${date}`;
    };

    const updateWeatherTodayDetails = () => {
        const { day } = weatherData.weatherToday;
        const {
            maxwind_kph: maxWindKph,
            avghumidity: avgHumidity,
            daily_chance_of_rain: rainChance,
        } = day;

        document.querySelector(".details .humidity .value").textContent =
            avgHumidity;
        document.querySelector(".details .rain-chance .value").textContent =
            rainChance;
        document.querySelector(".details .wind-speed .value").textContent =
            maxWindKph;
    };

    const updateWeatherToday = () => {
        updateWeatherTodaySummary();
        updateWeatherTodayDetails();
    };

    const updateWeatherTomorrow = () => {
        const { date, day } = weatherData.weatherTomorrow;

        const dayName = getDayName(date);
        const avgTemp = day.avgtemp_c;
        const { icon: conditionImg } = day.condition;

        document.querySelector(".tomorrow .temperature").textContent = avgTemp;
        document.querySelector(".tomorrow img").src = conditionImg;

        document.querySelector(
            ".tomorrow .date-info"
        ).textContent = `${dayName}, ${date}`;
    };

    const updateWeatherYesterday = () => {
        const { date, day } = weatherData.weatherYesterday;

        const dayName = getDayName(date);
        const avgTemp = day.avgtemp_c;
        const { icon: conditionImg } = day.condition;

        document.querySelector(".yesterday .temperature").textContent = avgTemp;
        document.querySelector(".yesterday img").src = conditionImg;

        document.querySelector(
            ".yesterday .date-info"
        ).textContent = `${dayName}, ${date}`;
    };

    const updateWeather = (newWeatherData) => {
        weatherData = newWeatherData;

        updateWeatherToday();
        updateWeatherTomorrow();
        updateWeatherYesterday();
    };

    return { form, resetForm, getFormData, updateWeather };
};

export default weatherView;
