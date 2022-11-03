function renderForbidden() {
    const content = `
    <h1>403</h1>
    `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderForbidden };