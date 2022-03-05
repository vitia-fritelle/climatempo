import {requestByCity, requestByCoord} from "../adapters/adapters.js";
import position from "../context/Position/Position.js";   
import Page from "../pages/Page.js";
import temperature from "../context/Temperature/Temperature.js";
import weather from "../context/Weather/Weather.js";
import temp_min from "../context/Temperature/minTemperature.js";
import temp_max from "../context/Temperature/maxTemperature.js";
import feelsLike from "../context/Temperature/feelsLikeTemperature.js";
import location from "../context/Position/Location.js";
import inputOptions from "../context/InputOptions/InputOptions.js";

export const onFirstMount = () => {
    
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                position.setLatitude(coords.latitude);
                position.setLongitude(coords.longitude);
                requestByCoord().then((response) => {
                    renderPage(response);
                    inputOptions.selectOption();
                });
            }, (error) => console.log(error)
        )
    } else {
        console.log('Usuário não autorizou');
    }  
    return null;
}

export const getLocation = () => {
    
    if(inputOptions.getOption()) {
        requestByCoord().then(renderPage);
    } else {
        requestByCity().then(({data}) => {
            position.setLatitude(data[0].lat);
            position.setLongitude(data[0].lon);
            requestByCoord().then(renderPage);
        });
    }
    return null;
};

const renderPage = ({data}) => {
    temperature.setTemperature(data.main.temp);
    temp_min.setTemperatureMin(data.main.temp_min);
    temp_max.setTemperatureMax(data.main.temp_max);
    feelsLike.setTemperatureFeelsLike(data.main.feels_like);
    weather.setWeather(data.weather[0].icon);
    location.setLocation(data.name);
    Page();
    inputOptions.selectOption();
    return null;
}

export const onKeyPressEnter = () => {

    document.addEventListener('keyup',(e) => {
        const key = e.key;
        key === 'Enter' && getLocation();
        return null;
    });
}