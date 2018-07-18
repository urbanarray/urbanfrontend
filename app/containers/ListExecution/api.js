import axios from 'utils/axios';


export const listExecutionApi = (projectId) => {
    return axios.get('execution/index/' + projectId);
}