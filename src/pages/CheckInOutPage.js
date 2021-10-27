import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from '../styles/CheckInOutPage.module.css';

import Card from '../components/Card';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import UserProfile from '../components/UserProfile';
import ClusterStatusBoard from '../components/ClusterStatusBoard';

import { UserContext } from '../contexts/UserContext';

const handleTimeFormat = (date) => {
  if (date === null) return null;
  const rowDate = new Date(date);
  const hours =
    rowDate.getHours() < 10 ? `0${rowDate.getHours()}` : rowDate.getHours();
  const minutes =
    rowDate.getMinutes() < 10
      ? `0${rowDate.getMinutes()}`
      : rowDate.getMinutes();
  return `${hours}:${minutes}`;
};

function CheckInOutPage() {
  const { userInfo } = useContext(UserContext);
  const checkInTime = useMemo(
    () => handleTimeFormat(userInfo.createdAt),
    [userInfo.createdAt],
  );

  const [detailIsVisible, setDetailIsVisible] = useState(false);
  const [userStatus, setUserStatus] = useState('in'); //userinfo의 cardNumber값으로 대체
  const [cardNumber, setcardNumber] = useState();
  const [isChecked, setChecked] = useState(false);

  const handleCheckinClick = () => {
    try {
      console.log('handlecheckinclick');
      setChecked(false);
      setUserStatus('out');
    } catch (e) {
      console.warn(e);
    }
  };
  const handleCheckoutClick = () => {
    console.log('checkout');
    setUserStatus('in');
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
    //클러스터 정보 fetche
    const fetchClusterData = async () => {
      console.log('fetched');
    };
    fetchClusterData();
  }, []);

  const { cardNumber: userCardNumber } = userInfo;
  return (
    <>
      <header className={styles.subHeader}>CHECK IN</header>
      <ClusterStatusBoard />
      <Card>
        {userStatus === 'in' ? (
          <>
            <UserProfile />
            <div className={styles.box}>
              클러스터 운영 시간 7:00 ~ 8:00 <br />
              인포데스크 점심시간 13:00 ~ 14:00
            </div>
            <input
              className={styles.cardInput}
              type="number"
              placeholder="Card Number"
              name="cardNum"
              value={cardNumber}
              onChange={inputChange}
            />
            <div className={styles.btnWrap}>
              <div className={styles.checkWrap}>
                <Checkbox
                  text="방역수칙에 동의하고 입장합니다."
                  checked={isChecked}
                  handleChange={handleChecked}
                />
                <span className={styles.checkDetail} onClick={showDetail}>
                  자세히
                </span>
              </div>
              <Button
                disabled={!cardNumber || !isChecked}
                color={'green'}
                onClick={handleCheckinClick}
                text={'CHECK IN'}
              />
            </div>
          </>
        ) : (
          <>
            <UserProfile />
            <span className={styles.box}>체크인 시간: {checkInTime}</span>
            <div className={styles.cardInfo}>
              <span className={styles.cardTitle}>CARD NUMBER</span>
              <h2 className={styles.cardNumber}>{userCardNumber}</h2>
            </div>
            <div className={styles.btnWrap}>
              <div className={styles.checkWrap}>
                <Checkbox
                  text="카드를 반납하고 체크아웃을 진행합니다."
                  checked={isChecked}
                  handleChange={handleChecked}
                />
              </div>
              <Button
                disabled={!cardNumber || !isChecked}
                color={'red'}
                onClick={handleCheckoutClick}
                text={'CHECK OUT'}
              />
            </div>
          </>
        )}
      </Card>
    </>
  );
}

export default CheckInOutPage;
