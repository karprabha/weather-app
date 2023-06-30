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
    let changeToFahrenheit = false;

    const form = document.querySelector("form");
    const unitToggler = document.querySelector(".unit-toggler");

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
        const { text: condition, icon: conditionImg } = day.condition;

        const avgTemp = changeToFahrenheit
            ? `${day.avgtemp_f} °F`
            : `${day.avgtemp_c} °C`;

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
            maxwind_mph: maxWindMph,
            avghumidity: avgHumidity,
            daily_chance_of_rain: rainChance,
        } = day;

        document.querySelector(".details .humidity .value").textContent =
            avgHumidity;

        document.querySelector(
            ".details .rain-chance .value"
        ).textContent = `${rainChance} %`;

        document.querySelector(".details .wind-speed .value").textContent =
            changeToFahrenheit ? `${maxWindMph} mph` : `${maxWindKph} km/h`;
    };

    const updateWeatherToday = () => {
        updateWeatherTodaySummary();
        updateWeatherTodayDetails();
    };

    const updateWeatherTomorrow = () => {
        const { date, day } = weatherData.weatherTomorrow;

        const dayName = getDayName(date);
        const { icon: conditionImg } = day.condition;

        const avgTemp = changeToFahrenheit
            ? `${day.avgtemp_f} °F`
            : `${day.avgtemp_c} °C`;

        document.querySelector(".tomorrow .temperature").textContent = avgTemp;
        document.querySelector(".tomorrow img").src = conditionImg;

        document.querySelector(
            ".tomorrow .date-info"
        ).textContent = `${dayName}, ${date}`;
    };

    const updateWeatherYesterday = () => {
        const { date, day } = weatherData.weatherYesterday;

        const dayName = getDayName(date);
        const { icon: conditionImg } = day.condition;

        const avgTemp = changeToFahrenheit
            ? `${day.avgtemp_f} °F`
            : `${day.avgtemp_c} °C`;

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

    const handleUnitToggler = () => {
        changeToFahrenheit = !changeToFahrenheit;

        if (changeToFahrenheit) unitToggler.textContent = "Display °C";
        else unitToggler.textContent = "Display °F";

        updateWeatherToday();
        updateWeatherTomorrow();
        updateWeatherYesterday();
    };

    unitToggler.addEventListener("click", handleUnitToggler);

    return { form, resetForm, getFormData, updateWeather };
};

export default weatherView;
