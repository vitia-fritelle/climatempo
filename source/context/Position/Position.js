function Position() {
    let _latitude;
    let _longitude;

    this.setLatitude = (lat) => _latitude = lat;
    this.setLongitude = (lon) => _longitude = lon; 
    this.getLatitude = () => _latitude;
    this.getLongitude = () => _longitude;
};

const position = new Position();

export default position;