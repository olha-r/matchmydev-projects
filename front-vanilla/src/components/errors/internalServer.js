import { messages } from "../../messages.js"
function renderInternalServer() {
    const content = `
    <h1>${messages.errors.internalServer.h1}</h1>
    <img src="./src/resources/images/errors/error-500.jpg" class="img-fluid" alt="500 Internal Server Error">
    `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderInternalServer };