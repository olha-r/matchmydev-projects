import { messages } from "../../messages.js";
function renderForbidden() {
    const content = `
    <h1>${messages.errors.forbidden}</h1 >
    <img src="./src/resources/images/errors/error-403.jpg" class="img-fluid" alt="403 Forbidden">
        `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderForbidden };