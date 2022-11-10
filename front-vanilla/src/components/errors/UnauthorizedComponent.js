import BaseComponent from "../BaseComponent.js";

export default class UnauthorizedComponent extends BaseComponent {
    constructor() {
        super("#main");
    }
    template() {
        return ` 
            <h1>${this.msg.errors.unauthorized}</h1>
            <img src="./src/resources/images/errors/error-401.jpg" class="img-fluid" alt="401 Unauthorized">`;

    }

}




