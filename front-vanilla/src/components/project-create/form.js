import { messages } from "../../messages.js"

function renderForm() {
    const formContent = `
    <h1>${messages.createProject.h1}</h1>
    <div class="row justify-content-center align-items-center">
        <div class="col col-12 col-md-9">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label required">${messages.createProject.form.name}</label>
                    <input name="name" id="name" type="text" class="form-control focus-grey"
                        aria-describedby="nameHelp">
                    <div id="nameHelp" class="form-text">${messages.createProject.form.nameHelp}</div>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label required">${messages.createProject.form.description}</label>
                    <textarea name="description" id="description" class="form-control focus-grey"
                        rows="10"></textarea>
                    <div id="descriptionHelp" class="form-text">${messages.createProject.form.descriptionHelp}</div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 col-12">
                        <label for="startDate" class="form-label required">${messages.createProject.form.startDate}</label>
                        <input name="startDate" type="date" id="startDate" class="form-control my-2 focus-grey"
                            min="2018-01-01" />
                        <label for="endDate" class="form-label">${messages.createProject.form.endDate}</label>
                        <input name="endDate" type="date" id="endDate" class="form-control my-2 focus-grey"
                            min="2018-01-01" />
                        <div id="endDateHelp" class="form-text">${messages.createProject.form.endDateHelp}</div>
                    </div>
                    <div class="col">
                        <div class="form-check form-switch">
                            <div class="row">
                                <label for="production" class="form-label status required">${messages.createProject.form.production}</label>
                                <div class="col mx-5">
                                    <input name="production" type="checkbox" id="production"
                                        class="form-check-input mb-2 focus-grey" role="switch">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col d-flex justify-content-end content">
                        <button type="submit" class="btn col-12 col-md-2 btn-create">${messages.createProject.form.create}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
        `;

    const main = document.getElementById("main");
    main.innerHTML = formContent;
}

export { renderForm };