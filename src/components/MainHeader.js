import React from 'react';
import styles from "../styles/MainHeader.module.css";

const MainHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.logo}>42 logo?</span>
        <h1 className={styles.title}>Check-in Cluster</h1>
      </header>
    </>
  );
}

export default MainHeader;