export default class I18N {

   static messages = null;

   // static dtf = null;

   static async init() {

      const dtfOptions = { dateStyle: 'short' };

      I18N.dtf = new Intl.DateTimeFormat('en', dtfOptions);

      const response = await fetch(`./src/resources/i18n/messages.json`);
      I18N.messages = await response.json();

   }



}
