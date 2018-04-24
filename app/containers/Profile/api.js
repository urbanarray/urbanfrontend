import axios from 'utils/axios';

export const profileApi = (data) => {
    return axios.post('profile/create', data);
}

export const updateProfileApi = (data) => {
    return axios.patch('profile/update/'+data.get('userId'), data);
}
