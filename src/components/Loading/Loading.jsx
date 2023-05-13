import React from "react";
import styles from "./Loading.module.css";
import loadingGif from "../../images/loading.gif";
import { useNavigate } from "react-router-dom";

const Loding = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h2>No Results Found</h2>
      <img src={loadingGif} alt="loadingImg" />
      <button onClick={() => navigate("/ViewTeam")}> View Team</button>
    </div>
  );
};

export default Loding;
