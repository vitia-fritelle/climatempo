function Location() {
    let _location;

    this.setLocation = (location) => _location = location;
    this.getLocation = () => _location;
};

const location = new Location();

export default location;