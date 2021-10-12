import React, { useState } from 'react';
import '../styles/Log.css';

const Log = () => {
  const [log, setLog] = useState({
    checkintime: 'PM 12:44',
  });
  return (
    <div style={{}} className="log-wrap">
      <span>CHECK IN TIME: {log.checkintime}</span>
    </div>
  );
};

export default Log;
