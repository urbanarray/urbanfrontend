import axios from 'utils/axios';

export const createRoleApi = (data) => {
    return axios.post('role/create', data);
}

export const listRolesApi = () => {
    return axios.get('role/index', {});
}
