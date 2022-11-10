import BaseComponent from "../BaseComponent.js";



export default class ForbiddenComponent extends BaseComponent {
    constructor() {
        super("#main");
    }
    template() {
        return `
        <h1>${this.msg.errors.forbidden}</h1 >
        <img src="./src/resources/images/errors/error-403.jpg" class="img-fluid" alt="403 Forbidden">`;
    }
}

//Super = heritage du parent