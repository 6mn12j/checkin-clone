import axios from 'axios';
const API_URL = 'http://gpark.42cadet.kr/';

const instance = axios.create({
  baseURL: API_URL,
});
axios.defaults.withCredentials = true;

export const getUserInfo = async (name) => {
  return await instance.get(`/user?username=${name}`);
};
