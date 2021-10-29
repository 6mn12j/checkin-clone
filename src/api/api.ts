import axios from 'axios';
const API_URL = 'http://gpark.42cadet.kr/';

const instance = axios.create({
  baseURL: API_URL,
});

export const getUserInfo = async (name: string) => {
  return await instance.get(`/user?username=${name}`);
};

export const getClusterStatus = async () => {
  return await instance.get('/cluster');
};