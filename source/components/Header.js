const Header = () => {

    return `
    <input type="radio" onchange="window.changeInputOptionsCoord()" id="coord" name="drone" value="coord">
    <label for="coord">Coordenadas</label>
    <input type="radio" onchange="window.changeInputOptionsCity()" id="city" name="drone" value="city">
    <label for="city">Cidade</label>
    `;
}

export default Header;