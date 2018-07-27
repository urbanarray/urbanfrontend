import axios from 'utils/axios';

export const listResourcesApi = (projectId) =>{
	return axios.get('resources/index/' + projectId )
}