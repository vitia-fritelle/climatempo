function temperatureMin() {
    let _temp_min;
    
    this.setTemperatureMin = (temp_min) => _temp_min = temp_min;
    this.getTemperatureMin = () => _temp_min;
};

const temp_min = new temperatureMin();

export default temp_min;

