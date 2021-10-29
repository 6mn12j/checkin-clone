import React from 'react';
import styles from '../styles/Checkbox.module.css';

type Props = {
  text: string;
  checked: boolean;
  isChecked?: boolean;
  handleChange: () => void;
  children?: React.ReactNode;
};
const Checkbox = ({ text, isChecked, handleChange, children }: Props) => {
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
