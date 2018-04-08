import axios from 'utils/axios';

export const setNewPasswordApi = (data) => {
    return axios.post('auth/setnewpassword', data);
}
