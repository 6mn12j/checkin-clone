import React from 'react';
import styles from "../styles/EntryChart.module.css";
import { Doughnut } from 'react-chartjs-2';

const EntryChart = ({ entry }) => {

  const { gaepo, maxCapGaepo, seocho, maxCapSeocho } = entry;

  const dataGaepo = {
    datasets: [{
      data: [gaepo, maxCapGaepo - gaepo],
      backgroundColor: [
        'rgb(83, 227, 170)',
        'rgba(83, 227, 173, 0.25)'
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
        'rgba(80, 200, 220, 0.25)'
      ],
      hoverOffset: 4,
      borderWidth: 0,
    }]
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.chart}>
        <h2 className={styles.h2}>개포</h2>
        <Doughnut
          data={dataGaepo}
          options= {{
            responsive: true,
            maintainAspectRatio: true,
            cutout: 46,
          }}
         />
        <span className={styles.label}>
          <strong className={styles.strong}>{gaepo}</strong> / {maxCapGaepo}
        </span>
      </div>
      <div className={styles.chart}>
        <h2 className={styles.h2}>서초</h2>
        <Doughnut
          data={dataSeocho}
          options= {{
            responsive: true,
            maintainAspectRatio: true,
            cutout: 46,
          }}
         />
        <span className={styles.label}>
          <strong className={styles.strong}>{seocho}</strong> / {maxCapSeocho}
        </span>
      </div>
    </section>
  );
}

export default EntryChart;