

function renderNotFound() {
    const content = `
    <h1>404</h1>
    `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderNotFound };