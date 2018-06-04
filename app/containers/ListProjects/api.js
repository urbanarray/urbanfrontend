import axios from 'utils/axios';

export const listProjectsApi = (pagination) => {
    return axios.get(`project/index?page=${pagination.page_no}&limit=${pagination.limit}`);
}

export const updateProjectApi = (data) => {
    return axios.patch('project/update/' + data._id, data);
}

export const deleteProjectApi = (id) => {
    
    return axios.delete('project/delete/' + id);

}

export const listPlacesApi = () => {

    return axios.get('places/index');

}