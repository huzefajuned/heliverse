import React from "react";
import MyTeam from "../MyTeam/MyTeam";
import { useNavigate } from "react-router-dom";
import styles from "./ViewTeamBtn.module.css";


const ViewTeamBtn = ({ cart, setCart }) => {
    const navigate = useNavigate()
  return (
    <>
      <div className={styles.btn}>
        <button onClick={()=> navigate('/ViewTeam')}>View Team</button>
      </div>
    </>
  );
};

export default ViewTeamBtn;

