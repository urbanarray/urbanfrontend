import axios from "utils/axios";

export const documentAPI = (data) =>  {
    return axios.post('documentation/create', data);
}

export const listDocumentAPI = (data) => {
    return axios.get('documentation/index/' + data);
}