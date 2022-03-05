function CountryCode() {
    let _countryCode;

    this.setCountryCode = (countryCode) => _countryCode = countryCode;
    this.getCountryCode = () => _countryCode;
};

const countryCode = new CountryCode();

export default countryCode;