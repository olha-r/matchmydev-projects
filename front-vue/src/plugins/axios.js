import axios from 'axios';

const ACCEPTED_STATUS = [200, 201, 202, 204, 400];
export default {
    install: (app) => {
        const axiosInstance = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            validateStatus: (status) => {
                // Fonction de callback appelee par axios pour valider ou non une reponse
                return ACCEPTED_STATUS.includes(status);
            }

        });
        axiosInstance.interceptors.response.use((axiosResponse)=>{
            console.log("response before: ", axiosResponse)
            const data = axiosResponse.data
            const status = axiosResponse.status;

            return {status:status, data:data}
        }
    )

        app.config.globalProperties.$axios = axiosInstance;
    }
}