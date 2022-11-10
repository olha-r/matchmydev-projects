import FormComponent from "./components/project-create/FormComponent.js";
import { renderNotFound } from "./components/errors/notFound.js";
import { renderForbidden } from "./components/errors/forbidden.js";
import { renderInternalServer } from "./components/errors/internalServer.js";
import { renderUnauthorized } from "./components/errors/unauthorized.js";

window.addEventListener("hashchange", (event) => route(event));

function route() {
    const hash = window.location.hash;
    let component = null;

    if (hash == "#/create-project" || hash == "") {
        component = new FormComponent();
    } else if (hash == "#/forbidden") {
        renderForbidden();
    } else if (hash == "#/internal-server") {
        renderInternalServer();
    } else if (hash == "#/unauthorized") {
        renderUnauthorized();
    } else {
        renderNotFound();
    };
    component.render();

};
export { route };