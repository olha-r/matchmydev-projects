export default class HttpClient {

    static async send(url, method, data) {

        const options = {
            method: method,
            headers: {
                "Content-Type":  "application/json"
            } 
        }
        if(data != null) {
            options.body = JSON.stringify(data);
        }
        const response = await fetch(url, options);
        const headers = response.headers;
        if (headers.get("Content-Type") == "application/json") {
            return await response.json();
        }
        return null;
    }
}