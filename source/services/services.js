import requestTemperature from "../adapters/adapters.js";
import position from "../context/Position/Position.js";   
import Page from "../pages/Page.js";
import temperature from "../context/Temperature/Temperature.js";
import weather from "../context/Weather/Weather.js";
import temp_min from "../context/Temperature/minTemperature.js";
import temp_max from "../context/Temperature/maxTemperature.js";
import feelsLike from "../context/Temperature/feelsLikeTemperature.js";
import location from "../context/Position/Location.js";

export const onFirstMount = () => {
    
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                position.setLatitude(coords.latitude);
                position.setLongitude(coords.longitude);
                requestTemperature().then(renderPage);
            }, (error) => console.log(error)
        )
    } else {
        console.log('Usuário não autorizou');
    }  
    return null;
}

export const getLocation = () => requestTemperature().then(renderPage);

const renderPage = ({data}) => {
    temperature.setTemperature(data.main.temp);
    temp_min.setTemperatureMin(data.main.temp_min);
    temp_max.setTemperatureMax(data.main.temp_max);
    feelsLike.setTemperatureFeelsLike(data.main.feels_like);
    weather.setWeather(data.weather[0].icon);
    location.setLocation(data.name);
    Page();
    return null;
}