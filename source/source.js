import {getLocation, onFirstMount} from './services/services.js';
import position from './context/Position/Position.js';
import inputOptions from './context/InputOptions/InputOptions.js';
import Page from './pages/Page.js';

onFirstMount();
window.getLocation = getLocation;
window.setLatitude = position.setLatitude;
window.setLongitude = position.setLongitude;
window.changeInputOptionsCoord = () => {
    inputOptions.setOption(true);
    Page();
}
window.changeInputOptionsCity = () => {
    inputOptions.setOption(false);
    Page();
}
