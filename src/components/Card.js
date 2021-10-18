import React from 'react';
import styles from '../styles/Card.module.css';
import classNames from 'classnames/bind';

const Card = ({ className, logo, children }) => {
  let cx = classNames.bind(styles);

  return (
    <div className={cx('wrapper')}>
      <img className={styles.logo} alt="logo" src="img/main_logo_black.png" />

      {children}
    </div>
  );
};
export default Card;
