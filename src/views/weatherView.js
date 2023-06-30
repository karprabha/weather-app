const weatherView = () => {
    const form = document.querySelector("form");

    const resetForm = () => form.reset();

    const getFormData = () => {
        const formData = {
            cityName: document.getElementById("city-search").value,
        };
        return formData;
    };

    const updateWeather = (weatherData) => {
        console.log(weatherData);
    };

    return { form, resetForm, getFormData, updateWeather };
};

export default weatherView;
