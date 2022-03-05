function CityName() {
    let _cityName;

    this.setCityName = (cityName) => _cityName = cityName;
    this.getCityName = () => _cityName;
};

const cityName = new CityName();

export default cityName;