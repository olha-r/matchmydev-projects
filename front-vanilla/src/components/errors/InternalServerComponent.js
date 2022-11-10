import BaseComponent from "../BaseComponent.js";


export default class InternalServerComponent extends BaseComponent {
    constructor() {
        super("#main");
    }
    template() {
        return `
        <h1>${this.msg.errors.internalServer}</h1>
        <img src="./src/resources/images/errors/error-500.jpg" class="img-fluid" alt="500 Internal Server Error">`;

    }



}
