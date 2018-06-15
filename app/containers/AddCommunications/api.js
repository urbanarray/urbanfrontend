import axios from 'utils/axios';

export const createCommunicationsApi = (data) => {
    
    return axios.post('communication/create', data);

}
export const listCommunicationApi = (projectId) => {
    return axios.get('communication/index/' + projectId);
} 