import React from "react";
import styles from "../styles";
import { ethereumLogo } from "../assets";

const Loader = ({ title }) => {
  return (
    <div className={styles.loader}>
      <img src={ethereumLogo} alt="etherum" className={styles.loaderImg} />
      <p className={styles.loaderText}>{title}</p>
    </div>
  );
};

export default Loader;
