import React, { useEffect, useState } from 'react';
import { CircleStatus } from './CircleStatus';
import styles from '../styles/StatusBoard.module.css';
const StatusBoard = () => {
  const [headCount, setHeadCount] = useState({
    gaepo: 1,
    seocho: 1,
    maxCapGaepo: 142,
    maxCapSeocho: 142,
  });
  const [clusterState, setClusterState] = useState({
    gaepo: null,
    seocho: null,
  });

  const getClusterCongestion = (current, max) => {
    const state = current / max;

    if (state > 0.8) {
      return 'red';
    } else if (state <= 0.8 && state > 0.4) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  useEffect(() => {
    //async로 개포, 서초 인원수 가져오기
    const getFetchedData = async () => {
      //데이터 가져오고
      console.log('fetch data');
      setHeadCount({
        gaepo: 12,
        seocho: 12,
        maxCapGaepo: 27,
        maxCapSeocho: 142,
      });
    };
    getFetchedData();
  }, []);

  useEffect(() => {
    setClusterState({
      gaepo: getClusterCongestion(headCount.gaepo, headCount.maxCapGaepo),
      seocho: getClusterCongestion(headCount.seocho, headCount.maxCapSeocho),
    });
  }, [headCount]);
  // 개포 , 서초 인원수에 따른 상태값s
  return (
    <div className={styles.wrap}>
      <span className={styles.title}>
        개포
        <h3 className={styles.count}>
          {headCount.gaepo} / {headCount.maxCapGaepo}
        </h3>
        <CircleStatus color={clusterState.gaepo} />
      </span>
      <span className={styles.title}>
        서초
        <h3 className={styles.count}>
          {headCount.seocho} / {headCount.maxCapSeocho}
        </h3>
        <CircleStatus color={clusterState.seocho} />
      </span>
    </div>
  );
};

export default StatusBoard;
