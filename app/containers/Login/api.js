import axios from 'utils/axios';

export const loginApi = (credentials) => {
    return axios.post('/auth/login', credentials);
}
