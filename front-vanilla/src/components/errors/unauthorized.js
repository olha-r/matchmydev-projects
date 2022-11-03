
function renderUnauthorized() {
    const content = `
    <h1>401</h1>
    `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderUnauthorized };