import http from './axios';

export async function getBlog() {
  const data = await http.get('/blog');
  return data.data;
}

export async function login(params) {
  const data = await http.post('/login', params);
  return data;
}

export async function logout() {
  const data = await http.post('/logout');
  return data;
}

export async function register(params) {
  const data = await http.post('/register', params);
  return data;
}

export async function getInfo() {
  const data = await http.get('/getInfo');
  return data;
}

export async function publishText(params) {
  const data = await http.post('/publishText', params);
  return data;
}
