import axios from 'utils/axios';

export const updateProfileApi = (data) => {
    return axios.patch('profile/update/'+data.get('userId'), data);
}
