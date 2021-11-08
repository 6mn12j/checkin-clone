import axios from 'axios';

const API_URL = 'http://gpark.42cadet.kr/';

const instance = axios.create({
  baseURL: API_URL,
});

export const setHeader = (jwtToken: string) => {
  instance.defaults.headers.common['X-42Cadet-Auth-Key'] = `${jwtToken}`;
};

export const getUserInfo = async (name: string) => {
  return await instance.get(`/user?username=${name}`, {
    withCredentials: true,
  });
};

export const getClusterStatus = async () => {
  return await instance.get('/cluster');
};

export const checkIn = async (cardNumber: number | undefined) => {
  return await instance.post(`/user/checkin?cardNumber=${cardNumber}`);
};

export const setCookie = async (name: string) => {
  console.log('setcookie', name);
  return await instance.get(`mock-make-token/${name}`);
};
