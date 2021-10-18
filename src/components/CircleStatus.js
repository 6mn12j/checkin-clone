import React from 'react';
import styles from '../styles/CircleStatus.module.css';
import classNames from 'classnames/bind';

export const CircleStatus = ({ color = 'green' }) => {
  let cx = classNames.bind(styles);

  return <div className={cx('circle', color)} />;
};
