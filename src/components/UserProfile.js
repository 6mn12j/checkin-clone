import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/UserProfile.module.css';
import { Circle } from './Circle';

const UserProfile = () => {
  const { userInfo } = useContext(UserContext);
  const { userImage, userId, userCursus, cardNumber } = userInfo;
  return (
    <div className={styles.wrap}>
      <div className={styles.imgmask}>
        <img className={styles.img} alt="user" src={userImage} />
      </div>
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