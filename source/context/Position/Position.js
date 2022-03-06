function Position() {
    let _latitude;
    let _longitude;

    this.setLatitude = (lat) => _latitude = new Number(lat);
    this.setLongitude = (lon) => _longitude = new Number(lon); 
    this.getLatitude = () => _latitude;
    this.getLongitude = () => _longitude;
};

const position = new Position();

export default position;