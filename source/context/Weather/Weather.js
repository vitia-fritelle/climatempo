function Weather() {
    let _weather;
    
    this.setWeather = (weather) => _weather = weather;
    this.getWeather = () => _weather;
};

const weather = new Weather();

export default weather;
