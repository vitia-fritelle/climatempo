import {getLocation, onFirstMount} from './services/services.js';
import position from './context/Position/Position.js';

onFirstMount();
window.getLocation = getLocation;
window.setLatitude = position.setLatitude;
window.setLongitude = position.setLongitude;
