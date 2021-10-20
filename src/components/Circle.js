import React from 'react';
import styles from '../styles/Circle.module.css';
import classNames from 'classnames/bind';

export const Circle = ({ color = 'green' }) => {
  let cx = classNames.bind(styles);

  return <div className={cx('circle', color)} />;
};
