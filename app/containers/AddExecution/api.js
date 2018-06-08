import axios from 'utils/axios';

export const executionApi = (data) =>  {
    return axios.post('execution/create', data);
}