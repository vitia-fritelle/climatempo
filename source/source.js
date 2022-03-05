import Main from "./components/Main.js";
import requestTemperature from './adapters/adapters.js';
import {getLocation, getLocation2} from './services/services.js';
import position from './context/Position/Position.js';

getLocation();
window.getLocation = getLocation2;
window.setLatitude = position.setLatitude;
window.setLongitude = position.setLongitude;
