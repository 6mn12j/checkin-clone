import React, { useContext } from 'react';
import styles from '../styles/UserProfile.module.css';
import { UserContext } from '../contexts/UserContext';
import { Circle } from './Circle';

const UserProfile = () => {
  const { userInfo } = useContext(UserContext);
  const { userId, userCursus, cardNumber, userImage } = userInfo;

  return (
    <div className={styles.wrap}>
      <img className={styles.userImg} alt="user" src={userImage} />
      <span className={styles.title}>
        <strong className={styles.id}>
          {userId}
          {cardNumber ? <Circle color={'green'} /> : null}
        </strong>
        <span className={styles.cursus}>{userCursus}</span>
      </span>
    </div>
  );
};

export default UserProfile;
