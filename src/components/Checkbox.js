import React, { useState } from 'react';
import styles from '../styles/Checkbox.module.css';
import classNames from 'classnames/bind';

const Checkbox = ({ className, text, isChecked, handleChange, children }) => {
  let cx = classNames.bind(styles);

  return (
    <label className={cx('text')}>
      <input
        className={cx('checkbox')}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      {text}
      {children}
    </label>
  );
};

export default Checkbox;
