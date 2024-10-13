import React from "react";

import styles from "./bgMesh.module.css";

const BgMesh = () => {
  return (
    <div className={`${styles.meshContainer}`}>
      <span className={`${styles.circle} ${styles.circle1} `}></span>
      <span className={`${styles.circle} ${styles.circle2}`}></span>
      <span className={`${styles.circle} ${styles.circle3}`}></span>
      <span className={`${styles.circle} ${styles.circle4}`}></span>
    </div>
  );
};

export default BgMesh;
