import BaseComponent from "./BaseComponent.js";

export default class MenuComponent extends BaseComponent {
    constructor(){
        super("#header")
    }

    template(){
       return `
       <nav class="navbar navbar-expand-md navbar-dark bg-dark container-xl">
       <a class="navbar-brand" href="#"><span class="logo">match<span id="my-color">my</span>dev</span></a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse static-top" id="navbarNav">
           <ul class="navbar-nav">
               <li class="nav-item">
                   <a class="nav-link" href="/#/create-project">${this.msg.createProject.h1}</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="/#/search-project">${this.msg.searchProject.h1}</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="#/managers-projects">${this.msg.managerProject.h1}</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="#"></a>
               </li>
           </ul>
       </div>
   </nav>
       `;
    }
}