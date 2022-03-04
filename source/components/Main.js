const Main = (temperature) => {
    return `
    <p>${temperature}</p>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="./source/source.js" type="module"></script>
    `;
}

export default Main;