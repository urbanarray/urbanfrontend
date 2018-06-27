import axios from 'utils/axios';

export const addResourcesApi = (data) =>{
	return axios.post('resources/create', data);
}
