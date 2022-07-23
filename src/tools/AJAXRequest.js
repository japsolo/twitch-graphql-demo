import Axios from "axios";

export const AxiosInstance = Axios.create({
    baseURL: "https://api.spacex.land/graphql/",
    timeout: 10000,
    headers: {
        contentType: "application/json"
    }
})

export const AJAXRequest = options => AxiosInstance.post("", options);