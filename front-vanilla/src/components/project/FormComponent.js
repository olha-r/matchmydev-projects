import BaseFormComponent from "../BaseFormComponent.js";

export default class FormComponent extends BaseFormComponent {

    constructor() {
        super("#main", {
            url: "http://localhost:8080/projects", // change it if necessary when backend is established
            method: "POST"
        });
    }

    dataModel(){
        return{
            name: "test",
            code: "123",
            description: "TEST",
            startDate: "",
            endDate: "",
            production: false
        }
    }

    template() {
        return `
        <h1>${this.msg.createProject.h1}</h1>
        <div class="row justify-content-center align-items-center">
            <form>
                <div class="row">
                    <div class="col-md-8 mb-3">
                        <label for="name" class="form-label required">${this.msg.createProject.form.name.label}</label>
                        <input name="name" id="name" type="text" class="form-control focus-grey"
                            aria-describedby="nameHelp">
                        <div id="nameHelp" class="form-text">${this.msg.createProject.form.name.helpText}</div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="code" class="form-label required">${this.msg.createProject.form.code.label}</label>
                        <input name="code" id="code" type="text" class="form-control focus-grey"
                            aria-describedby="codeHelp">
                        <div id="codeHelp" class="form-text">${this.msg.createProject.form.code.helpText}</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label required">${this.msg.createProject.form.description.label}</label>
                    <textarea name="description" id="description" class="form-control focus-grey" rows="10"></textarea>
                    <div id="descriptionHelp" class="form-text">${this.msg.createProject.form.description.helpText}</div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="startDate" class="form-label required">${this.msg.createProject.form.startDate.label}</label>
                        <input name="startDate" type="date" id="startDate" class="form-control my-2 focus-grey"
                            min="2018-01-01" />
                    </div>
                    <div class="col-md-6">
                        <label for="endDate" class="form-label">${this.msg.createProject.form.endDate.label}</label>
                        <input name="endDate" type="date" id="endDate" class="form-control my-2 focus-grey"
                            min="2018-01-01" />
                        <div id="endDateHelp" class="form-text">${this.msg.createProject.form.endDate.helpText}</div>
                    </div>
                </div>
                <div class="form-check form-switch mb-3">
                    <div class="row">
                        <label for="production" class="form-label status required">${this.msg.createProject.form.production.label}</label>
                        <div class="col mx-5">
                            <input name="production" type="checkbox" id="production"
                                class="form-check-input mb-2 focus-grey" role="switch">
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col d-flex justify-content-end content">
                        <button type="submit" class="btn col-12 col-md-2 btn-create">${this.msg.createProject.form.submit}</button>
                    </div>
                </div>
            </form>
        </div>
        `;
    }
}