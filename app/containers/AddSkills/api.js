import axios from 'utils/axios';

export const createSkillApi = (data) => {
    return axios.post('skill/create', data);
}

export const listSkillsApi = () => {
    return axios.get('skill/index', {});
}
