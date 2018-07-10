
import axios from 'utils/axios';

export const submitCodeApi = (data) =>{
	return axios.post('auth/passphrase', data);
}