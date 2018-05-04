import axios from 'utils/axios';

export const listVolunteersApi = () => {
    return axios.get('volunteer/index');
}

export const resendEmailApi = (body) => {
    return axios.post('volunteer/resend-invitation', body);
}