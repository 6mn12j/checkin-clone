import React from 'react';
import styles from '../styles/Checkbox.module.css';
type Props = {
  text: string;
  checked: boolean;
  handleChange: (e: any) => void;
  children?: React.ReactNode;
};
const Checkbox = ({ text, checked, handleChange, children }: Props) => {
  return (
    <label className={styles.text}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {text}
      {children}
    </label>
  );
};

export default Checkbox;
