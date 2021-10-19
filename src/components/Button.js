import React from 'react';
import styles from '../styles/Button.module.css';
import classNames from 'classnames/bind';

const Button = ({ color = 'green', disabled, onClick, text }) => {
  let cx = classNames.bind(styles);
  return (
    <>
      <button
        className={cx('button', color)}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
