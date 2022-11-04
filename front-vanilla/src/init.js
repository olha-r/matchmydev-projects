import { renderMenu } from "./components/menu.js";
import { renderForm } from "./components/project-create/form.js";
import { initMessages } from "./messages.js";

await initMessages();
renderMenu();
renderForm();

