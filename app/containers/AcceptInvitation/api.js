import axios from 'utils/axios';

export const findUserApi = (id) => {
    return axios.get('/volunteer/find-user/'+ id);
}

export const acceptInvitationApi = (data, id) => {
    return axios.post(`/volunteer/accept-invitation/${id}`, data);
}

