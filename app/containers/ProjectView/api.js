import axios from 'utils/axios';

export const projectView = (id) => {
    return axios.get('project/view/'+id);
}