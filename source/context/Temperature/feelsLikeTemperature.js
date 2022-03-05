function temperatureFeelsLike() {
    let _feelsLike;
    
    this.setTemperatureFeelsLike = (temp_feelsLike) => _feelsLike = temp_feelsLike;
    this.getTemperatureFeelsLike = () => _feelsLike;
};

const feelsLike = new temperatureFeelsLike();

export default feelsLike;