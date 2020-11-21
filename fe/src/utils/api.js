import Axios from 'axios';

const api = Axios.create({
    url: 'http://localhost:3000'
});

api.interceptors.response.use(
    response => console.log(response),
    error => console.log(error.response)
)

export default api;