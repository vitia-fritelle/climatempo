import { getLocation } from '../services/services.js';

const requestTemperature = () => {
    const position = getLocation();
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${10}&lon=${20}&appid=${'0bea16f86ef4ebcad62b7631bc9393a7'}&units=metric&lang=pt_br`);
}

export default requestTemperature;