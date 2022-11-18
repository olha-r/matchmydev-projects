import Messages from "./I18N.js";
import Router from "./Router.js"


class Application {
    static async main() {
        await Messages.init();
        Router.init();
    }
}
Application.main();

