import { RouteComponentProps } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import ClusterStatusChart from '../components/ClusterStatusChart';
import Footer from '../components/Footer';
import MainNotice from '../components/MainNotice';
import Button from '../components/Button';

const MainPage = ({ history }: RouteComponentProps) => {
  
  const intralogIn = () => {
    //42 로그인 페이지로 이동
    // window.location.href = 'https://profile.intra.42.fr/';
    history.push('/checkin')
  };
  return (
    <>
      <MainHeader />
      <ClusterStatusChart />
      <MainNotice />
      <Button onClick={intralogIn} text="LOG IN" />
      <Footer />
    </>
  );
};

export default MainPage;
