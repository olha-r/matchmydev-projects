import BaseIterableComponent from '../BaseIterableComponent.js';

export default class SearchComponent extends BaseIterableComponent {

  constructor() {
    super("#main", {
      url: "http://localhost:8080/projects",
      method: "GET",
      elementsSelector: "#projects"
    });
  }

  template() {
    return `
        <h1 class="pt-3">${this.msg.searchProject.h1}</h1>
        <form class="mb-3 mt-4">
          <div class="input-group mb-3">
            <label for="projestSearch" class="form-label">${this.msg.searchProject.searchBar.label}</label>
            <div class="input-group">
                <input name="project-search"id="project-search" type="text" class="form-control focus-grey" aria-label="project name" aria-describedby="basic-addon2">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <button type="submit" class="btn btn-create">${this.msg.searchProject.searchBar.button}</button>
            </div>
            <div id="projectHelp" class="form-text">${this.msg.searchProject.searchBar.helpText}</div>
          </div>
        </form>

        <h2>${this.msg.searchProject.h2}</h2>
        <div id="projects" class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 font-regular">
        </div> `;
  }

  elementTemplate(element) {
    return `<div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h3 class="card-title mb-4">${element.name}</h3>
                  <p class="card-text text-size"><span class="start-date">${this.dtf(element.startDate)}</span>
                  <p class="card-text text-size"> 
                    <i class="bi bi-toggle-on production-${element.production}"></i>
                  </p>
                </div>
                <div class="card-footer footer-color d-flex justify-content-end">
                 <i class="bi bi-eye"></i>
                </div>
              </div>
            </div>`;
  }

}