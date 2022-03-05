function temperatureMax() {
    let _temp_max;
    
    this.setTemperatureMax = (temp_max) => _temp_max = temp_max;
    this.getTemperatureMax = () => _temp_max;
};

const temp_max = new temperatureMax();

export default temp_max;

