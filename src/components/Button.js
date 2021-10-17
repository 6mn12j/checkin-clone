import React from 'react';
import styles from "../styles/Button.module.css";

const Button = ({ disabled, onClick, text }) => {
  let className = styles.default;
  if ( text === "CHECK OUT") {
    className = `${styles.default} ${styles.red}`
  }
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={className}>
          {text}
      </button>
    </>
  );
}

export default Button;