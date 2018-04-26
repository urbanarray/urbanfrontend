import axios from 'utils/axios';

export const listSkillsApi = () => {
    return axios.get('skill/index');
}

export const createUserSkillsApi = (data) => {
    return axios.post('userSkill/create', data);
}

export const listUserSkillsApi = (id) => {
    return axios.get('userSkill/index/'+id);
}