import BaseIterableComponent from '../BaseIterableComponent.js';

export default class SearchComponent extends BaseIterableComponent {

  constructor() {
    super("#main"), {
      url: "",
      method: "GET",
      elementsSelector: "#projects"
    }
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
                  <h3 class="card-title mb-4">Andromede 1000</h3>
                  <p class="card-text text-size"><span class="start-date">${this.msg.searchProject.card.startDate}</span> Jan 10, 2002
                  <p class="card-text text-size">${this.msg.searchProject.card.inProduction} 
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-toggle-on switched-rotate" viewBox="0 0 16 16">
                      <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                    </svg>
                  </p>
                </div>
                <div class="card-footer footer-color d-flex justify-content-end">
                 <i class="bi bi-eye"></i>
                </div>
            </div> `;
  }

}