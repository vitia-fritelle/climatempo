import position from '../context/Position/Position.js';
import cityName from '../context/CityName/CityName.js';
import countryCode from '../context/CountryCode/CountryCode.js';

export const requestByCoord = () => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.getLatitude()}&lon=${position.getLongitude()}&appid=0bea16f86ef4ebcad62b7631bc9393a7&units=metric&lang=pt_br`);
};

export const requestByCity = () => {
    return axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName.getCityName()},,${countryCode.getCountryCode()}&limit=1&appid=0bea16f86ef4ebcad62b7631bc9393a7`);
}
