import http from './axios';

export function getBlog() {
  const data = http.get('/blog');
  return data.data;
}
