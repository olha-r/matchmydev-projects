function renderMenu() {
    const content = `
            <nav class="navbar navbar-expand-md navbar-dark bg-dark container-xl">
                <a class="navbar-brand" href="#"><span class="logo">match<span id="my-color">my</span>dev</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse static-top" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;

    const header = document.getElementById("header");
    header.innerHTML = content;
}

export { renderMenu };
