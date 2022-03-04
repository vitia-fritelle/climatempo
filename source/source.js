import Main from "./components/Main.js";
import requestTemperature from './adapters/adapters.js';

requestTemperature().then((response) => {
    
    const body = document.querySelector('body');
    body.innerHTML = Main(response.data.main.temp)
});




