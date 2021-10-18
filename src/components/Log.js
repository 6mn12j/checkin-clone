import React, { useState } from 'react';
import styles from '../styles/Log.module.css';
import { Block } from './Block';

const Log = () => {
  const [log, setLog] = useState({
    checkintime: 'PM 12:44',
  });
  return (
    <Block>
      <span>체크인 시간: {log.checkintime}</span>
    </Block>
  );
};

export default Log;
