import requestTemperature from "../adapters/adapters.js";
import position from "../context/Position/Position.js";   
import Page from "../pages/Page.js";
import temperature from "../context/Temperature/Temperature.js";

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
        console.log('Usuário não autorizou')
    }  
    return null;
}

export const getLocation = () => requestTemperature().then(renderPage);

const renderPage = ({data}) => {
    
    temperature.setTemperature(data.main.temp);
    Page();
    return null;
}