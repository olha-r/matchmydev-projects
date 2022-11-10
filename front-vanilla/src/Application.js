import { renderMenu } from "./components/menu.js";
import Messages from "./Messages.js";
import { route } from "./router.js"


class Application {
    static async main() {
        await Messages.init();
        renderMenu();
        route();
    }
}
Application.main();

