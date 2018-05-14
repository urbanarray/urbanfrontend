import axios from 'utils/axios';

export const listProjectsApi = () => {
    return axios.get('project/index');
}

export const updateProjectApi = (data) => {
    return axios.patch('project/update/' + data._id, data);
}

export const deleteProjectApi = (id) => {
    return axios.delete('project/delete/' + id);
}