import temperature from "../context/Temperature/Temperature.js";
import weather from "../context/Weather/Weather.js";
import temp_min from "../context/Temperature/minTemperature.js";
import temp_max from "../context/Temperature/maxTemperature.js";
import feelsLike from "../context/Temperature/feelsLikeTemperature.js";
import location from "../context/Position/Location.js";
import selectCountries from "./SelectCountries.js";
import inputOptions from "../context/InputOptions/InputOptions.js";

const Main = () => {
    return `
    <h1>${location.getLocation()}</h1>
    <div class="main_data">
        <img src="https://openweathermap.org/img/wn/${weather.getWeather()}@2x.png" alt="weather_icon">
        <span class="temperatute">${temperature.getTemperature().toFixed(0)} °C</span>
    </div>
    <div class="secondary_data">
        <span class="min_temperature">Mínima ${temp_min.getTemperatureMin().toFixed(0)} °C</span>
        <span class="max_temperature">Máxima ${temp_max.getTemperatureMax().toFixed(0)} °C</span>
    </div>
    <div class="feels_like_temp">
        <span class="feelslike_temperature"> RealFeel® ${feelsLike.getTemperatureFeelsLike().toFixed(0)} °C</span><br>
    </div>
    ${inputOptions.getOption()?inputByCoordinates():inputByCity()}
    <div class="container">
        <button onclick='window.getLocation()'>Atualizar</button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="./source/source.js" type="module"></script>
    `;
}

const inputByCoordinates = () => {
    return `
    <h2>Insira abaixo as coordenadas da região desejada</h2>
    <div class="insert_coord">
        <p>Não sabe as coordenadas da região?&nbsp</p>
        <a href="https://www.coordenadas-gps.net/endereco-longitude-latitude-coordenadas-gps" target="_blank"><b>Clique Aqui!</b></a>
    </div>
    <div class="coord">
        <input id='lat' type="text" onchange='window.setLatitude(this.value)' placeholder='Latitude (Ex: 22.4247)'></input>
        <input id='lon' type="text" onchange='window.setLongitude(this.value)' placeholder='Longitude (Ex: -45.4601)'></input>
    </div>`;
}

const inputByCity = () => {
    return `
    <h2>Insira abaixo a cidade desejada e selecione o país</h2>
    <div class="city">
        <input id='city' type="text" onchange='window.setCity(this.value)' placeholder='Insira a sua cidade'></input>
        ${selectCountries()}
    </div>`;
}

export default Main;