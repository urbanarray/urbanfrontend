import axios from "utils/axios";


export const listDocumentAPI = (projectId) => {
    return axios.get('documentation/index/' + projectId);
}