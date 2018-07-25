import axios from 'utils/axios';


export const listPlacesApi = (payload) =>{

	return axios.get('places/index', payload)

}