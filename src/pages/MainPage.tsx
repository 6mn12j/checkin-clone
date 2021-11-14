import { useCallback, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import MainHeader from '../components/MainHeader';
import ClusterStatusChart from '../components/ClusterStatusChart';
import Footer from '../components/Footer';
import MainNotice from '../components/MainNotice';
import Button from '../components/Button';

import { useUserDispatch } from '../contexts/UserContext';

const MainPage = ({ history }: RouteComponentProps) => {

  const dispatch = useUserDispatch();
  const setLogin = useCallback(() => {
    dispatch({ type: 'SET_LOGIN' });
  }, [dispatch]);
  const setLogout = useCallback(() => {
    dispatch({ type: 'SET_LOGOUT' });
  }, [dispatch]);

  useEffect(() => {
    if (document.cookie) {
      history.push('/checkin');
      setLogin();
    } else {
      setLogout();
    }
    console.log('Mainpage useEffect');
  }, [history, setLogin, setLogout]);

  const handleLogin = () => {
    console.log('handleLogin');
    window.location.href =
      'https://api.intra.42.fr/oauth/authorize?client_id=65de342b14809aa6709c93518bf9d062ccaa3a947fd0ca34f17a828fd62e5a2d&redirect_uri=http%3A%2F%2Fgpark.42cadet.kr%2Flogin%2Fcallback%2F42&response_type=code';
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
