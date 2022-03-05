import Main from "../components/Main.js";

const Page = () => {
    const body = document.querySelector('body');
    body.innerHTML = `
    <main>
        ${Main()}
    </main>
    `;
    return null;
}

export default Page;