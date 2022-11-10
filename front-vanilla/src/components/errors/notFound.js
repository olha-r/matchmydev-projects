import Messages from "../../Messages.js"
function renderNotFound() {
    const content = `
    <h1>${Messages.messages.errors.notFound}</h1>
    <img src="./src/resources/images/errors/error-404.jpg" class="img-fluid" alt="404 Not Found">
    `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderNotFound };