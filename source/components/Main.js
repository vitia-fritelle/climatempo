import temperature from "../context/Temperature/Temperature.js";

const Main = () => {
    return `
    <input id='lat' type="text" onchange='window.setLatitude(this.value)' placeholder='latitude'></input>
    <input id='lon' type="text" onchange='window.setLongitude(this.value)' placeholder='longitude'></input>
    <p>${temperature.getTemperature().toLocaleString('pt-BR')}</p>
    <button onclick='window.getLocation()'>Atualizar</button>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="./source/source.js" type="module"></script>
    `;
}

export default Main;