import Main from "../components/Main.js";
import Header from "../components/Header.js";

const Page = () => {
    const body = document.querySelector('body');
    body.innerHTML = `
    <header>
        ${Header()}
    </header>
    <main>
        ${Main()}
    </main>
    `;
    return null;
}

export default Page;