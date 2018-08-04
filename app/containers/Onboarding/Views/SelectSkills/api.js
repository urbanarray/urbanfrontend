import axios from 'utils/axios';

export const submitSkillsApi = (data) => {
  console.log('submit skills api is being called')
  return axios.post('v1/skill/create', data)
    .then(function(response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}
