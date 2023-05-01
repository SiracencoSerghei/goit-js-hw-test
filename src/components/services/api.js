import axios from 'axios';

axios.defaults.baseURL = 'https://644ac87079279846dcf1c85b.mockapi.io';

   export const addMaterial = async values => {
    const response = await axios.post('/materials', values);
    return response.data;
   };