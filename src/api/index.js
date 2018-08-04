import http from './axios';

export function getBlog() {
  const data = http.get('/blog');
  return data.data;
}

export function login(params) {
  const data = http.post('/login', { params });
  return data.data;
}
