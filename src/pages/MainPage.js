import { useContext } from 'react';
import { ClusterContext } from '../contexts/ClusterContext';
import MainHeader from '../components/MainHeader';
import ClusterStatusChart from '../components/ClusterStatusChart';
import Footer from '../components/Footer';
import MainNotice from '../components/MainNotice';
import Button from '../components/Button';

const MainPage = () => {
  const { headCount } = useContext(ClusterContext);
  const intralogIn = () => {
    //42 로그인 페이지로 이동
    window.location.href = 'https://profile.intra.42.fr/';
  };
  return (
    <>
      <MainHeader />
      <ClusterStatusChart headCount={headCount} />
      <MainNotice />
      <Button disabled={false} onClick={intralogIn} text="LOG IN" />
      <Footer />
    </>
  );
};

export default MainPage;
