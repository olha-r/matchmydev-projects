import BaseIterableComponent from "../BaseIterableComponent.js";

export default class ManagersComponent extends BaseIterableComponent{
    constructor() {
        super("#main", {
          url: "http://localhost:8080/projects/manager-projects",
          method: "GET",
          elementsSelector: "#manager-projects"
        });
    }
        template() {
            return `
                <h1 class="pt-3">${this.msg.managerProject.h1}</h1>
                <div class="accordion" id="manager-projects">
                </div> `;
          }

          elementTemplate(element){
            return`
            <h2 class="accordion-header" id="heading${element.id}">
                <button class="accordion-button focus-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${element.id}">
                    ${element.name}
                </button>
              </h2>
              <div id="collapse${element.id}" class="accordion-collapse collapse" aria-labelledby="heading${element.id}" data-bs-parent="#accordionExample">
                <div class="accordion-body focus-grey ">
                <div class="row">
                <div class="col-12 col-md-6 d-flex justify-content-md-center justify-content-start">
                  <p><span class="start-date">${this.msg.managerProject.accordion.startDate} </span>${element.startDate} </p>
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-md-center justify-content-start mb-3">
                  <p class="card-text text-size">${this.msg.managerProject.accordion.inProdution} <i class="bi bi-toggle-on production-${element.production}"></i></p>
                </div>
              </div>
              <p>${this.msg.managerProject.accordion.description} <p>
              <p class="col-12">${element.description}</p>
            </div>
              </div>
            </div>
            `
          } 

}