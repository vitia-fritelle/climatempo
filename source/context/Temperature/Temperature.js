function Temperature() {
    let _temperature;
    
    this.setTemperature = (temp) => _temperature = temp;
    this.getTemperature = () => _temperature;
};

const temperature = new Temperature();

export default temperature;





