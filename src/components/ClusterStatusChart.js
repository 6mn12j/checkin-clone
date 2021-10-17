import React from 'react';
import styles from "../styles/ClusterStatusChart.module.css";
import { Doughnut } from 'react-chartjs-2';

const ClusterStatusChart = ({ headCount }) => {

  const { gaepo, maxCapGaepo, seocho, maxCapSeocho } = headCount;

  const dataGaepo = {
    datasets: [{
      data: [gaepo, maxCapGaepo - gaepo],
      backgroundColor: [
        'rgb(83, 227, 170)',
        'rgba(83, 227, 173, 0.2)'
      ],
      hoverOffset: 4,
      borderWidth: 0,
    }],
  };

  const dataSeocho = {
    datasets: [{
      data: [seocho, maxCapSeocho - seocho],
      backgroundColor: [
        'rgb(80, 200, 220)',
        'rgba(80, 200, 220, 0.2)'
      ],
      hoverOffset: 4,
      borderWidth: 0,
    }]
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.chart}>
        <h2 className={styles.h2}>개포</h2>
        <Doughnut data={dataGaepo} options= {{cutout: '77%'}} />
        <span className={styles.label}>
          <span>
            <strong className={styles.strong}>{gaepo}</strong> / {maxCapGaepo}
          </span>
        </span>
      </div>
      <div className={styles.chart}>
        <h2 className={styles.h2}>서초</h2>
        <Doughnut data={dataSeocho} options= {{cutout: '77%'}} />
        <span className={styles.label}>
          <span>
            <strong className={styles.strong}>{seocho}</strong> / {maxCapSeocho}
          </span>
        </span>
      </div>
    </section>
  );
}

export default ClusterStatusChart;