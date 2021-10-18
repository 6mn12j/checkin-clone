import React, { useContext, useEffect, useState } from 'react';
import { Block } from '../components/Block';
import Button from '../components/Button';
import Card from '../components/Card';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Log from '../components/Log';
import StatusBoard from '../components/StatusBoard';
import UserProfile from '../components/UserProfile';
import { UserContext } from '../contexts/UserContext';
import '../styles/CheckInOutPage.css';

function CheckInOutPage() {
  const { userInfo } = useContext(UserContext);

  const [detailIsVisible, setStateDetailIsVisible] = useState(false);
  const [status, setStatus] = useState('in'); //userinfo의 cardNumber값으로 대체
  //const [cardNumber, setcardNumber] = useState(null); //userInfo의 cardNumber로 대체
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
    setStateDetailIsVisible(true);
  };
  useEffect(() => {
    //클러스터 정보
    const getFetchedData = () => {
      console.log('fetched');
    };
    getFetchedData();
  }, []);

  return (
    <div className="check-inout-wrap">
      <header className="header">CHECK IN</header>
      <StatusBoard />
      <Card className="card">
        <UserProfile />
        {status === 'in' ? (
          <div className="checkin-wrapper">
            <Block>
              o 클러스터 운영 시간 7:00 ~ 8:00 <br />
              인포데스크 점심시간 13:00 ~ 14:00
            </Block>
            <Input
              className="checkin-input"
              type="number"
              placeholder="Card Number"
            />
          </div>
        ) : (
          <div className="checkout-wrapper">
            <Log />
            <div className="card-info">
              <div className="card-title">CARD NUMBER</div>
              <h2 className="card-number">474</h2>
            </div>
          </div>
        )}
        <div className="button-wrapper">
          {status === 'in' ? (
            <div className="checkIn-checkbox">
              <Checkbox
                className="checkbox-text"
                text="방역수칙에 동의하고 입장 합니다."
                checked={isChecked}
                handleChange={handleChecked}
              ></Checkbox>
              <span className="detail" onClick={showDetail}>
                자세히 &#62;
              </span>
            </div>
          ) : (
            <Checkbox
              className="checkbox-text"
              text="카드를 반납하고 체크아웃을 진행합니다."
              checked={isChecked}
              handleChange={handleChecked}
            />
          )}
          <Button
            className={status === 'in' ? 'checkin-btn' : 'checkout-btn'}
            handleClick={
              status === 'in' ? handleCheckinClick : handleChckoutClick
            }
            text={status === 'in' ? 'CHECK IN' : 'CHECK OUT'}
          />
        </div>
      </Card>
    </div>
  );
}

export default CheckInOutPage;
