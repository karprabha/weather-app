const weatherController = (weatherModel, weatherView) => {
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const { cityName } = weatherView.getFormData().cityName;
        try {
            const weatherData = await weatherModel.getWeatherData(cityName);
            weatherView.updateWeather(weatherData);
        } catch (error) {
            console.log(error);
        }

        weatherView.form.resetForm();
    };

    weatherView.form.addEventListener("submit", handleFormSubmit);

    const init = async () => {
        try {
            const weatherData = await weatherModel.getWeatherData("Delhi");
            weatherView.updateWeather(weatherData);
        } catch (error) {
            console.log(error);
        }
    };

    return { init };
};

export default weatherController;
