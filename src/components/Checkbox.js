import React, { useState } from 'react';
import styles from '../styles/Checkbox.module.css';

const Checkbox = ({ className, text, isChecked, handleChange, children }) => {
  return (
    <label className={styles.text}>
      <input
        className={styles.checkbox}
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
