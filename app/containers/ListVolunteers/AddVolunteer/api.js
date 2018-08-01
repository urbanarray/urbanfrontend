import axios from 'utils/axios';

export const createVolunteerApi = (data) => {
    return axios.post('volunteer/create', data);
}

export const listRolesApi = () => {
    return axios.get('role/index', {});
}
