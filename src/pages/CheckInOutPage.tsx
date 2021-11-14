import React, { useMemo, useState } from 'react';
import styles from '../styles/CheckInOutPage.module.css';

import Card from '../components/Card';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import UserProfile from '../components/UserProfile';
import ClusterStatusBoard from '../components/ClusterStatusBoard';

import {
  UserState,
  useUserDispatch,
  useUserState,
} from '../contexts/UserContext';
import { checkIn, checkOut, getUserInfo } from '../api/api';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const handleTimeFormat = (date: string | Date): string => {
  if (date === null) return '';
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
  /* UserContext*/
  const dispatch = useUserDispatch();
  const userInfo = useUserState();
  const setLogin = () => {
    dispatch({ type: 'SET_LOGIN' });
  };
  const setUserInfo = (userInfo: UserState) => {
    dispatch({ type: 'SET_USER_INFO', userInfo });
  };

  const history = useHistory();
  const [isChecked, setChecked] = useState(false);
  const [detailIsVisible, setDetailIsVisible] = useState(false);
  const [userStatus, setUserStatus] = useState('in'); //userinfo의 cardNumber값으로 대체
  const [cardNumber, setcardNumber] = useState();

  const checkInTime = useMemo(() => {
    if (userInfo.checkIn !== null) return handleTimeFormat(userInfo.checkIn);
  }, [userInfo.checkIn]);

  const handleCheckinClick = async () => {
    try {
      console.log('handlecheckinclick');
      //벡에서 요청시 올바른 카드넘버가 맞으면 checkIN 아니면 올바른 카드넘버가 아닙니다 띄우기.
      await checkIn(cardNumber);
      setChecked(!isChecked);
      setUserStatus('out');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleCheckoutClick = async () => {
    console.log('checkout');
    await checkOut();
    setChecked(!isChecked);
    setcardNumber(null);
    setUserStatus('in');
  };

  const handleChecked = (e: any) => {
    setChecked(!isChecked);
  };

  const showDetail = () => {
    console.log('방역수칙 자세하게 보여주기');
    setDetailIsVisible(true);
  };

  const inputChange = (e: any) => {
    setcardNumber(e.target.value);
  };

  const fetchedData = async () => {
    // local 테스트시 필요
    // const name = document.cookie
    //   ? decoding(getTokenInCookie())
    //       .split(':')[1]
    //       .split(',')[0]
    //       .replace(/"/g, '')
    //   : '';

    // const response = await testGetUserInfo(name);

    //서버용;
    const response = await getUserInfo();

    const { data } = response.data;
    const userInfo = {
      ...data,
      userImage: `https://cdn.intra.42.fr/users/${data.username}.jpg`,
    };
    setUserInfo(userInfo);
  };

  useEffect(() => {
    fetchedData();

    console.log('fetchedData', userInfo);
  }, [userStatus]);

  useEffect(() => {
    if (!document.cookie) history.push('/');
    //쿠키가 있으면 로그인 상태 -> 해당 쿠키값의(로그인한 유저의 ) 데이터를 가져온다
    setLogin();
    fetchedData();
  }, [history]);

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
              value={cardNumber || ''}
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
              <h2 className={styles.cardNumber}>{userInfo.cardNumber}</h2>
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
                disabled={!isChecked}
                color={'red'}
                onClick={() => handleCheckoutClick()}
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
