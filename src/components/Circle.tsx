import React from 'react';
import styles from '../styles/Circle.module.css';
import classNames from 'classnames/bind';

type Props = {
  color: string | 'green' | 'orange' | 'red';
};
export const Circle = ({ color = 'green' }: Props) => {
  let cx = classNames.bind(styles);

  return <div className={cx('circle', color)} />;
};
