import { useContext } from 'react';
import { EntryContext } from '../contexts/EntryContext';
import MainHeader from '../components/MainHeader';
import EntryChart from '../components/EntryChart';
import Footer from '../components/Footer';
import Notice from '../components/Notice';
import styles from "../styles/Main.module.css";

const Main = () => {
  const { entry } = useContext(EntryContext);
  const logIn = () => {
    //42 로그인 페이지로 이동
    window.location.href='https://profile.intra.42.fr/';
  }
  return (
    <>
      <MainHeader />
      <EntryChart entry={entry}/>
      <Notice />
      <button className={styles.button} onClick={logIn}>LOG IN</button>
      <Footer />
    </>
  );
}

export default Main;
