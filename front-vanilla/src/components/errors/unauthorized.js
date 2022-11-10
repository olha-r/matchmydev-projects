import Messages from "../../Messages.js"
function renderUnauthorized() {
    const content = `
    <h1>${Messages.messages.errors.unauthorized}</h1>
    <img src="./src/resources/images/errors/error-401.jpg" class="img-fluid" alt="401 Unauthorized">
    `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderUnauthorized };