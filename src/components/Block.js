import React from 'react';
import styles from '../styles/Block.module.css';
import classNames from 'classnames/bind';

export const Block = ({ children }) => {
  let cx = classNames.bind(styles);

  return <div className={cx('wrap')}>{children}</div>;
};
