import { renderForm } from "./components/project-create/form.js";
import { renderNotFound } from "./components/errors/notFound.js";

window.addEventListener("hashchange", (event) => route(event));

function route() {
    const hash = window.location.hash;
    if(hash == "#/create-project" || hash == ""){
        renderForm();
    }else{
        renderNotFound();
    };
}
export {route};