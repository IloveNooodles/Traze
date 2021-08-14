import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

export const getLocations = () => API.get('/data');
export const getReport = (id) => API.get(`/data/${id}`);
export const createReport = (report) => API.post('/data/create', report);
// export const solveReport = (id) => API.patch(`/data/${id}/solve`);

export const getLeaderboard = () => API.get('/user/leaderboard');
export const signIn = (form) => API.post('/user/signin', form);
export const signUp = (form) => API.post('/user/signup', form);