import {getLocation, onFirstMount} from './services/services.js';
import position from './context/Position/Position.js';
import inputOptions from './context/InputOptions/InputOptions.js';
import Page from './pages/Page.js';
import cityName from './context/CityName/CityName.js';
import countryCode from './context/CountryCode/CountryCode.js';

onFirstMount();
window.getLocation = getLocation;
window.setLatitude = position.setLatitude;
window.setLongitude = position.setLongitude;
window.changeInputOptionsCoord = () => {
    inputOptions.setOption(true);
    Page();
    inputOptions.selectOption();
}
window.changeInputOptionsCity = () => {
    inputOptions.setOption(false);
    Page();
    inputOptions.selectOption();
}
window.setCity = cityName.setCityName;
window.setCountry = countryCode.setCountryCode;