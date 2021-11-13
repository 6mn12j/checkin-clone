import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import MainHeader from '../components/MainHeader';
import ClusterStatusChart from '../components/ClusterStatusChart';
import Footer from '../components/Footer';
import MainNotice from '../components/MainNotice';
import Button from '../components/Button';

import { setCookie } from '../api/api';
import { useUserDispatch } from '../contexts/UserContext';

const MainPage = ({ history }: RouteComponentProps) => {
  const dispatch = useUserDispatch();
  const setLogin = () => {
    dispatch({ type: 'SET_LOGIN' });
  };

  useEffect(() => {
    if (document.cookie) {
      history.push('/checkin');
    }
  }, [history]);

  const handleLogin = async () => {
    const user = prompt('유저 ID를 입력하세요');
    await setCookie(user);
    if (document.cookie) setLogin();
    else window.alert(' ..토큰 저장 실패');
  };

  return (
    <>
      <MainHeader />
      <ClusterStatusChart />
      <MainNotice />
      <Button onClick={handleLogin} text="LOG IN" />
      <Footer />
    </>
  );
};

export default MainPage;
