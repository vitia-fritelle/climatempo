import {requestTemperature} from '../adapters/adapters.js';

let temperature;

const getTemperature = ({data}) => {
    temperature = data.main.temp;
}

requestTemperature().then(getTemperature);

export default temperature;