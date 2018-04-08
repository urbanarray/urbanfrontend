import axios from 'utils/axios';

export const forgetPasswordApi = (data) => {
    return axios.post('auth/resetpassword', data);
}
