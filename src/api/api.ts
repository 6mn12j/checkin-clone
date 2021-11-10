import axios from 'axios';

const API_URL = 'http://gpark.42cadet.kr/';

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const setHeader = (jwtToken: string) => {
  instance.defaults.headers.common['X-42Cadet-Auth-Key'] = `${jwtToken}`;
};

export const getUserInfo = async (name: string | null) => {
  return await instance.get(`/user?username=${name}`);
};

export const getClusterStatus = async () => {
  return await instance.get('/cluster', {
    withCredentials:false,
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