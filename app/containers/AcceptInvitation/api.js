import axios from 'utils/axios';

export const findUserApi = (id) => {
    return axios.get('/volunteer/find-user', id);
}

export const acceptInvitationApi = (data) => {
    return axios.get('/volunteer/accept-invitation', data);
}

