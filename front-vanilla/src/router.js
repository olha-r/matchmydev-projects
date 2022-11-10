import FormComponent from "./components/project-create/FormComponent.js";
import NotFoundComponent from "./components/errors/NotFoundComponent.js";
import ForbiddenComponent from "./components/errors/ForbiddenComponent.js";
import InternalServerComponent from "./components/errors/InternalServerComponent.js";
import UnauthorizedComponent from "./components/errors/UnauthorizedComponent.js";
import MenuComponent from "./components/MenuComponent.js";

export default class Router{

    static init(){
        window.addEventListener("hashchange", (event) => route(event));
        Router.route();
        const menu = new MenuComponent();
        menu.render();
    }

    static route(){
        const hash = window.location.hash;
    let component = null;

    if (hash == "#/create-project" || hash == "") {
        component = new FormComponent();
    } else if (hash == "#/forbidden") {
        component = new ForbiddenComponent();
    } else if (hash == "#/internal-server") {
        component = new InternalServerComponent();
    } else if (hash == "#/unauthorized") {
        component = new UnauthorizedComponent();
    } else {
        component = new NotFoundComponent();
    };
    component.render();

    }
}


/* window.addEventListener("hashchange", (event) => route(event));

function route() {
    const hash = window.location.hash;
    let component = null;

    if (hash == "#/create-project" || hash == "") {
        component = new FormComponent();
    } else if (hash == "#/forbidden") {
        component = new ForbiddenComponent();
    } else if (hash == "#/internal-server") {
        component = new InternalServerComponent();
    } else if (hash == "#/unauthorized") {
        component = new UnauthorizedComponent();
    } else {
        component = new NotFoundComponent();
    };
    component.render();

};
export { route }; */