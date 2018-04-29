import axios from 'utils/axios';

export const listVolunteersApi = () => {
    return axios.get('volunteer/index');
}