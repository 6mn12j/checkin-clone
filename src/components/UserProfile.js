import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/UserProfile.module.css';
const UserProfile = () => {
  const { userInfo } = useContext(UserContext);
  const { userImage, userId, userCursus, cardNumber } = userInfo;
  return (
    <div className={styles.wrap}>
      <img className={styles.img} alt="user" src={userImage} />
      <span className={styles.row}>
        <h2 className={styles.id}>{userId}</h2>
        {cardNumber ? <div className={styles.online} /> : null}
      </span>
      <h3 className={styles.cursus}>{userCursus}</h3>
    </div>
  );
};

export default UserProfile;
