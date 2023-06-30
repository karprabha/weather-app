import "./styles/style.css";
import weatherModel from "./models/weatherModel";
import weatherView from "./views/weatherView";
import weatherController from "./controllers/weatherController";

const newWeatherModel = weatherModel();
const newWeatherView = weatherView();
const newWeatherController = weatherController(newWeatherModel, newWeatherView);

newWeatherController.init("chandigarh");
