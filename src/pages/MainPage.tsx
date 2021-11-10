import { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import MainHeader from '../components/MainHeader';
import ClusterStatusChart from '../components/ClusterStatusChart';
import Footer from '../components/Footer';
import MainNotice from '../components/MainNotice';
import Button from '../components/Button';
import Pending from '../components/Pending';

import { UserContext } from '../contexts/UserContext';
import { setCookie } from '../api/api';

const MainPage = ({ history }: RouteComponentProps) => {

  const { loading, userInfo }: any = useContext(UserContext);

  useEffect(() => {
    if (userInfo.userId !== '') history.push('/checkin');
  });

  const handleLogin = () => {
    const user = prompt('유저 ID를 입력하세요');
    setCookie(user);
  };
 
  if (loading) return <Pending>로딩중입니다</Pending>;
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
