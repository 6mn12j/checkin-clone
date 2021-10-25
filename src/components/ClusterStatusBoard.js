import { useEffect, useState, useContext } from 'react';
import { ClusterContext } from '../contexts/ClusterContext';
import { Circle } from './Circle';
import styles from '../styles/ClusterStatusBoard.module.css';

const ClusterStatusBoard = () => {
  const { headCount } = useContext(ClusterContext);
  const { gaepo, maxCapGaepo, seocho, maxCapSeocho } = headCount;
  const [clusterCongestion, setClusterCongestion] = useState({
    //개포, 서초 인원 수에 따른 혼잡도
    gaepoCongestion: null,
    seochoCongestion: null,
  });
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
    setClusterCongestion({
      gaepoCongestion: getClusterCongestion(gaepo, maxCapGaepo),
      seochoCongestion: getClusterCongestion(seocho, maxCapSeocho),
    });
  }, [gaepo, maxCapGaepo, seocho, maxCapSeocho]);

  return (
    <div className={styles.wrap}>
      <div className={styles.item}>
        <span className={styles.title}>
          개포
          <span className={styles.count}>
            {gaepo} / {maxCapGaepo}
          </span>
          <Circle color={gaepoCongestion} />
        </span>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>
          서초
          <span className={styles.count}>
            {seocho} / {maxCapSeocho}
          </span>
          <Circle color={seochoCongestion} />
        </span>
      </div>
    </div>
  );
};

export default ClusterStatusBoard;
