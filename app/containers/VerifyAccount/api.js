import axios from 'utils/axios';

export const verifyApi = (id) => {
    return axios.get('/auth/verify/'+id);
}
