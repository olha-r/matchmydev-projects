let messages = null;

async function initMessages() {
    const response = await fetch ("./src/resources/i18n/messages.json");
    messages = await response.json();
}

export{initMessages, messages};