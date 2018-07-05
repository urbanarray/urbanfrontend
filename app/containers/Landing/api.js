
import axios from 'utils/axios';

export const submitCodeApi = (data) =>{
	return axios.post('landing/create', data);
}