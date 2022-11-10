import Messages from "../../Messages.js"
import BaseComponent from "../BaseComponent.js";


export default class NotFoundComponent extends BaseComponent {
    constructor() {
        super("#main");
    }
    template() {
        return `
          <h1>${Messages.messages.errors.notFound}</h1>
          <img src="./src/resources/images/errors/error-404.jpg" class="img-fluid" alt="404 Not Found">`

    }


}


