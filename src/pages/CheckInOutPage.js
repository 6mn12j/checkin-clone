import React, { useContext, useEffect, useState } from 'react';

import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import StatusBoard from '../components/StatusBoard';
import UserProfile from '../components/UserProfile';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/CheckInOutPage.module.css';
import logo from '../images/42-logo-black.png';
function CheckInOutPage() {
  const { userInfo } = useContext(UserContext);
  const [log, setLog] = useState({
    checkintime: 'PM 12:44',
  });
  const [detailIsVisible, setDetailIsVisible] = useState(false);
  const [status, setStatus] = useState('in'); //userinfo의 cardNumber값으로 대체
  const [cardNumber, setcardNumber] = useState('');
  const [readySubmit, setReadySubmit] = useState(true); // 카드번호가 있는지, 방역수칙 동의함 체크에 따라서 ->button disalbed
  const [isChecked, setChecked] = useState(false);
  const handleCheckinClick = () => {
    if (readySubmit) {
      try {
        console.log('checkin');
        setStatus('out');
      } catch (e) {}
    }
  };
  const handleChckoutClick = () => {
    console.log('checkout');
    setStatus('in');
  };
  const handleChecked = () => {
    console.log('checked');
    setChecked(!isChecked);
  };

  const showDetail = () => {
    console.log('방역수칙 자세하게 보여주기');
    setDetailIsVisible(true);
  };

  const inputChange = (e) => {
    setcardNumber(e.target.value);
  };

  useEffect(() => {
    //클러스터 정보
    const getFetchedData = () => {
      console.log('fetched');
    };
    getFetchedData();
  }, []);

  return (
    <>
      <header className={styles.subHeader}>CHECK IN</header>
      <StatusBoard />
      <div className={styles.card}>
        <img className={styles.logo} alt="logo" src={logo} />
        <UserProfile />
        {status === 'in' ? (
          <div className={styles.infoWrapper}>
            <div className={styles.box}>
              o 클러스터 운영 시간 7:00 ~ 8:00 <br />
              인포데스크 점심시간 13:00 ~ 14:00
            </div>
            <input
              className={styles.cardNumInput}
              type="number"
              placeholder="Card Number"
              name="cardNum"
              value={cardNumber}
              onChange={inputChange}
            />
          </div>
        ) : (
          <div className={styles.infoWrapper}>
            <span className={styles.box}>체크인 시간: {log.checkintime}</span>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}>CARD NUMBER</div>
              <h2 className={styles.cardNumber}>474</h2>
            </div>
          </div>
        )}
        <div className={styles.checkinCheckbox}>
          {status === 'in' ? (
            <div className={styles.flexDiv}>
              <Checkbox
                text="방역수칙에 동의하고 입장 합니다."
                checked={isChecked}
                handleChange={handleChecked}
              />
              <span className={styles.detail} onClick={showDetail}>
                자세히 &#62;
              </span>
            </div>
          ) : (
            <Checkbox
              text="카드를 반납하고 체크아웃을 진행합니다."
              checked={isChecked}
              handleChange={handleChecked}
            />
          )}

          <Button
            color={status === 'in' ? 'green' : 'red'}
            onClick={status === 'in' ? handleCheckinClick : handleChckoutClick}
            text={status === 'in' ? 'CHECK IN' : 'CHECK OUT'}
          />
        </div>
      </div>
    </>
  );
}

export default CheckInOutPage;
