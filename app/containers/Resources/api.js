import axios from 'utils/axios';

export const addResourcesApi = (data) =>{
	return axios.post('resources/create', data);
}

export const listPlacesApi = (payload) =>{
	return axios.get('places/index', payload)
}


export const listResourcesApi = (projectId) =>{
	return axios.get('resources/index/' + projectId )
}