import axios from 'utils/axios';

export const profileApi = (data) => {
    return axios.post('profile/create', data);
}
