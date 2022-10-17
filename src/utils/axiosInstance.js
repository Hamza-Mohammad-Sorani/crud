import axios from 'axios';

const baseURL = 'http://localhost:3001/api/';

const fetchClient = () => {
    const defaultOptions = {
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(function(config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    });

    return instance;
};

export default fetchClient();