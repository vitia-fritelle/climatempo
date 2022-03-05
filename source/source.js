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
    selectElement('#coord');
}
window.changeInputOptionsCity = () => {
    inputOptions.setOption(false);
    Page();
    selectElement('#city');
}

const selectElement = (seletorHierarquico) => {

    const option = document.querySelector(seletorHierarquico);
    option.setAttribute('selected','selected');
    return null;
}