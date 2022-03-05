import requestTemperature from "../adapters/adapters.js";
import position from "../context/Position/Position.js";   
import Page from "../pages/Page.js";
import temperature from "../context/Temperature/Temperature.js";

export const getLocation = () => {
    
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                position.setLatitude(coords.latitude);
                position.setLongitude(coords.longitude);
                requestTemperature().then(({data}) => {
                    temperature.setTemperature(data.main.temp)
                    Page();
                });
            }, (error) => console.log(error)
        )
    } else {
        console.log('Usuário não autorizou')
    }  
}

export const getLocation2 = () => {
    requestTemperature().then(({data}) => {
        temperature.setTemperature(data.main.temp);
        Page();
    })
}
 