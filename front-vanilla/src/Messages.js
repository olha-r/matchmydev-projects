export default class Messages {

   static messages = null;

   static async init() {
        const response = await fetch ("./src/resources/i18n/messages.json");
        Messages.messages = await response.json();
   }
}
