import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/UserProfile.module.css';
import { Circle } from './Circle';

const UserProfile = () => {
  const { userInfo } = useContext(UserContext);
  const { userId, userCursus, cardNumber } = userInfo;
  return (
    <div className={styles.wrap}>
      <div className={styles.imgmask}>
        <img
          className={styles.img}
          alt="user"
          src={`https://cdn.intra.42.fr/users/${userId}.jpg`}
        />
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
