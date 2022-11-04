import { messages } from "../../messages.js"
function renderNotFound() {
    const content = `
    <h1>${messages.errors.notFound.h1}</h1>
    <img src="./src/resources/images/errors/error-404.jpg" class="img-fluid" alt="404 Not Found">
    `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderNotFound };