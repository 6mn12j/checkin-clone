import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Log from '../components/Log';
import Status from '../components/Status';
import UserProfile from '../components/UserProfile';
import '../styles/CheckInOut.css';
import { checkLists } from '../utils/notice';
function CheckInOut() {
  const [status, setStatus] = useState('in');

  const handleCheckinClick = () => {
    console.log('checkin');
    setStatus('out');
  };
  const handleChckoutClick = () => {
    console.log('checkout');
    setStatus('in');
  };

  return (
    <div className="check-inout-wrap">
      <header className="header">CHECK IN</header>
      <Status />
      <div className="card">
        <UserProfile />
        {status === 'in' ? (
          <div className="checkin-wrapper">
            <div className="input-wrapper" style={{ textAlign: 'left' }}>
              <label
                htmlFor="allCheck"
                style={{ display: 'block', fontSize: '1em' }}
              >
                <input type="checkbox" />
                모두 동의
              </label>
              <div className="checkbox-wrapper">
                {checkLists.map((checkList, idx) => (
                  <label key={idx} className="checkbox-text">
                    <input type="checkbox" />
                    {checkList}
                  </label>
                ))}
              </div>
            </div>
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
        <Button
          className={status === 'in' ? 'checkin-btn' : 'checkout-btn'}
          handleClick={
            status === 'in' ? handleCheckinClick : handleChckoutClick
          }
          text={status === 'in' ? 'CHECK IN' : 'CHECK OUT'}
        />
      </div>
    </div>
  );
}

export default CheckInOut;
