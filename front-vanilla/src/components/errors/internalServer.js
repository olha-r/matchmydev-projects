function renderInternalServer() {
    const content = `
    <h1>500</h1>
    `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderInternalServer };