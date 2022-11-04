import { renderMenu } from "./components/menu.js";
import { initMessages } from "./messages.js";
import { route } from "./router.js"

await initMessages();
renderMenu();
route();

