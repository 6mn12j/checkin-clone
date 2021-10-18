import React from 'react';
import styles from '../styles/Input.module.css';

import classNames from 'classnames/bind';

const Input = ({ className, handleSubmit, placeholder, type, text }) => {
  let cx = classNames.bind(styles);

  return (
    <div>
      <input
        className={cx(className)}
        placeholder={placeholder}
        type={type}
        handleSubmit={handleSubmit}
      >
        {text}
      </input>
    </div>
  );
};

export default Input;
