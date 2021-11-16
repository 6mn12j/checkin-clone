import { useMemo, useState, useCallback } from 'react';
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
import {
  useClusterDispatch,
  getCluster,
} from '../contexts/ClusterContext';
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
  const userDispatch = useUserDispatch();
  const userInfo = useUserState();
  const setLogin = useCallback(() => {
    userDispatch({ type: 'SET_LOGIN' });
  }, [userDispatch]);
  const setLogout = useCallback(() => {
    userDispatch({ type: 'SET_LOGOUT' });
  }, [userDispatch]);
  const setUserInfo = useCallback(
    (userInfo: UserState) => {
      userDispatch({ type: 'SET_USER_INFO', userInfo });
    },
    [userDispatch],
  );

  //ClusterContext
  const clusterDispatch = useClusterDispatch();
  const fetchClusterData = useCallback(() => {
    getCluster(clusterDispatch);
  }, [clusterDispatch]);

  const history = useHistory();
  const [isChecked, setChecked] = useState(false);
  const [detailIsVisible, setDetailIsVisible] = useState(false);
  // const [userStatus, setUserStatus] = useState('in'); //userinfo의 cardNumber값으로 대체
  const [cardNumber, setcardNumber] = useState(null);

  const checkInTime = useMemo(() => {
    if (userInfo.checkIn !== null) return handleTimeFormat(userInfo.checkIn);
  }, [userInfo.checkIn]);

  const handleCheckinClick = async () => {
    try {
      console.log('handlecheckinclick');
      //벡에서 요청시 올바른 카드넘버가 맞으면 checkIN 아니면 올바른 카드넘버가 아닙니다 띄우기.
      await checkIn(cardNumber);
      setChecked(!isChecked);
      fetchUserData();
      fetchClusterData();
    } catch (e) {
      console.warn(e);
    }
  };

  const handleCheckoutClick = async () => {
    console.log('checkout');
    await checkOut();
    setChecked(!isChecked);
    setcardNumber(null);
    fetchUserData();
    fetchClusterData();
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

  const fetchUserData = useCallback(async () => {
    // local 테스트시 필요
    // const name = document.cookie
    //   ? decoding(getTokenInCookie())
    //       .split(':')[1]
    //       .split(',')[0]
    //       .replace(/"/g, '')
    //   : '';

    // const response = await testGetUserInfo(name);

    //서버용;
    try {
      const response = await getUserInfo();
      const { data } = response.data;
      const userInfo = {
        ...data,
        isLogin: true,
      };
      setUserInfo(userInfo);
      console.log('fetchedData', userInfo);
    } catch (e) {
      console.log(e);
    }
  }, [setUserInfo]);

  useEffect(() => {
    //쿠키가 있으면 로그인 상태 -> 해당 쿠키값의(로그인한 유저의 ) 데이터를 가져온다
    if (!document.cookie) {
      history.push('/');
      setLogout();
    }
    fetchUserData();
    fetchClusterData();
    setLogin();
  }, [fetchUserData, fetchClusterData, history, setLogin, setLogout]);

  return (
    <>
      <header className={styles.subHeader}>CHECK IN</header>
      <ClusterStatusBoard />
      <Card>
        {!userInfo.cardNumber ? (
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
