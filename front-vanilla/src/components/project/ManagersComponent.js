import BaseIterableComponent from "../BaseIterableComponent.js";

export default class ManagersComponent extends BaseIterableComponent{
    constructor() {
        super("#main", {
          url: "http://localhost:8080/projects/manager-projects",
          method: "GET",
          elementsSelector: "#accordionExample"
        });
    }
        template() {
            return `
                <h1 class="pt-3">${this.msg.managerProject.h1}</h1>
                <div class="accordion" id="accordionExample">
                </div> `;
          }

          elementTemplate(element){
            return`
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button focus-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ${element.name}
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body focus-grey ">
                    <div class="d-flex">
                        <div class="col-sm-12 col-md-6">
                            <p><span class="start-date">${this.msg.managerProject.accordion.startDate}:</span> Jan 10, 2002</p>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <p class="card-text text-size">${this.msg.managerProject.accordion.inProdution}</p>
                            <i class="bi bi-toggle-on production-${element.production}"></i>
                        </div>
                </div>
                <div class="col">
                    <p>${this.msg.managerProject.accordion.description} <p>
                    <p class="col-12">${element.description}</p>
                </div>
                </div>
              </div>
            </div>
            
            `
          } 

}