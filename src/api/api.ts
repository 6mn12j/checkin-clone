import axios from 'axios';

const API_URL = 'http://gpark.42cadet.kr/';

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const setHeader = (jwtToken: string) => {
  instance.defaults.headers.common['X-42Cadet-Auth-Key'] = `${jwtToken}`;
};

//oauth붙고 jwt토큰 사용하면 사라질 test용 API
export const testGetUserInfo = async (name: string | null) => {
  return await instance.get(`/user?username=${name}`);
};

export const getUserInfo = async () => {
  return await instance.get('/user/token');
};

export const getClusterStatus = async () => {
  return await instance.get('/cluster', {
    withCredentials: false,
  });
};

export const checkIn = async (cardNumber: number | undefined) => {
  return await instance.post(`/user/checkin?cardNumber=${cardNumber}`);
};

export const checkOut = async () => {
  return await instance.post('user/checkout');
};

export const setCookie = async (name: string | null) => {
  console.log('setcookie', name);
  return await instance.get(`mock-make-token/${name}`);
};
