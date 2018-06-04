import axios from 'utils/axios';

export const createCommunicationsApi = (data) => {
    
    return axios.post('communication/create', data);

}