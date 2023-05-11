import React from "react";
import styles from "./Loading.module.css";
import loadingGif from "../../images/loading.gif";

const Loding = () => {
  return (
    <div className={styles.container}>
      <img
        src={loadingGif}
        alt="loadingImg"
      />
      {/* <button onClick={() => window.location.reload()}>Re Load Page</button> */}
    </div>
  );
};

export default Loding;
