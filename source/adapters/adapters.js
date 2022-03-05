import position from '../context/Position/Position.js';

const requestTemperature = () => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.getLatitude()}&lon=${position.getLongitude()}&appid=0bea16f86ef4ebcad62b7631bc9393a7&units=metric&lang=pt_br`);
};

export default requestTemperature;