import axios from 'utils/axios';

export const healthAPI = (data) => {
    return axios.post('healthsafety/create', data)
}

export const listHealthApi = (data) => {
    return axios.get('healthsafety/index/' + data)
}