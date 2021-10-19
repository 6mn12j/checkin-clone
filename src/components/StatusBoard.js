import React, { useEffect, useState } from 'react';
import { CircleStatus } from './CircleStatus';
import styles from '../styles/StatusBoard.module.css';
const StatusBoard = () => {
  const [headCount, setHeadCount] = useState({
    //개포, 서초 인원 수
    gaepo: 1,
    seocho: 1,
    maxCapGaepo: 142,
    maxCapSeocho: 142,
  });

  const [clusterCongestion, setClusterCongestion] = useState({
    //개포, 서초 인원 수에 따른 혼잡도
    gaepoCongestion: null,
    seochoCongestion: null,
  });
  const { gaepo, maxCapGaepo, seocho, maxCapSeocho } = headCount;
  const { gaepoCongestion, seochoCongestion } = clusterCongestion;

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
    setClusterCongestion({
      gaepoCongestion: getClusterCongestion(
        headCount.gaepo,
        headCount.maxCapGaepo,
      ),
      seochoCongestion: getClusterCongestion(
        headCount.seocho,
        headCount.maxCapSeocho,
      ),
    });
  }, [headCount]);

  return (
    <div className={styles.wrap}>
      <span className={styles.title}>
        개포
        <h3 className={styles.count}>
          {gaepo} / {maxCapGaepo}
        </h3>
        <CircleStatus color={gaepoCongestion} />
      </span>
      <span className={styles.title}>
        서초
        <h3 className={styles.count}>
          {seocho} / {maxCapSeocho}
        </h3>
        <CircleStatus color={seochoCongestion} />
      </span>
    </div>
  );
};

export default StatusBoard;
