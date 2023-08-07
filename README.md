# Weather App
Live: [Weather App](https://prismatic-medovik-043edf.netlify.app/)
## Description
The Weather App is a web application that lets users search for weather information for a particular location. It provides real-time weather data including temperature, humidity, wind speed, and chance of rain. Users can also switch between Fahrenheit and Celsius temperature units.The app follows the **Model-View-Controller (MVC)** architecture to ensure a clear separation of concerns and maintainable codebase.

## Features

- Search for weather information by location.
- Display today's weather summary, including description, temperature, and condition image.
- Show detailed weather information for today, including humidity, chance of rain, and wind speed.
- View weather data for the previous day and the next day.
- Toggle between Fahrenheit and Celsius temperature units.

## MVC Architecture
The app is built using the MVC architecture to ensure a structured and modular design:
- **Model:** The '**weatherModel.js**' module handles API requests and data manipulation.
- **View:** The '**weatherView.js**' module manages the user interface and displays data.
- **Controller:** The '**weatherController.js**' module acts as the bridge between the Model and View, handling user interactions and updating the UI.

## Installation
### Clone the repository:
```bash
https://github.com/karprabha/weather-app
cd weather-app
```
### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm start
```

The Weather App will be accessible at `http://localhost:8080` in your web browser.

### Building for Production

To build the Weather App for production, use the following command:

```bash
npm run build
```

This will create an optimized and minified version of the application in the dist or build directory, which you can deploy to a web server or hosting platform.


## Technologies Used
- CSS
- HTML
- JavaScript
- Webpack
- FontAwesome for icons

## APIs Used
- **WeatherAPI**: Used to fetch weather data for different locations.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your forked repository.
- Create a pull request to the original repository's '**main**' branch.

## Acknowledgments
- This project was inspired by the desire to create a simple and functional weather app.
- Thanks to the creators of the [WeatherAPI](https://www.weatherapi.com/) for providing the weather data used in this app.
