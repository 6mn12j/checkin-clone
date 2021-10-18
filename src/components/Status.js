import React, { useState } from 'react';

const Status = () => {
  const [headCount, setHeadCount] = useState({
    gaepo: 1,
    seocho: 1,
    maxCapGaepo: 142,
    maxCapSeocho: 142,
  });
  return (
    <div className="status-wrap">
      <span className="status-title">
        개포
        <h3 className="status-count">
          {headCount.gaepo}/{headCount.maxCapGaepo}
        </h3>
      </span>
      <span className="status-title">
        서초
        <h3 className="status-count">
          {headCount.seocho}/{headCount.maxCapSeocho}
        </h3>
      </span>
    </div>
  );
};

export default Status;
