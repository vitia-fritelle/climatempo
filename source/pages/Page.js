import Main from "../components/Main.js";

const Page = () => {
    const body = document.querySelector('body');
    body.innerHTML = Main();
}

export default Page;