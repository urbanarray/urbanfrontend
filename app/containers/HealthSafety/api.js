import axios from 'utils/axios';

export const healthAPI = (data) => {
    return axios.post('healthSafety/create', data)
}