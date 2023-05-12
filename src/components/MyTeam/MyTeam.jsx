import React from "react";
import styles from "./MyTeam.module.css";
import Header from "../Header/Header";
const MyTeam = ({ cart, setCart }) => {
  return (
    <>
      <h4 id={styles.heading}>All Selected Team Members</h4>

      <span id={styles.members}>
        Your Teams have {cart?.length} Members <br />
        Scroll Lft to Right
      </span>
      <div className={styles.main}>
        {cart?.map((user) => {
          const {
            id,
            available,
            avatar,
            domain,
            email,
            first_name,
            gender,
            last_name,
          } = user;
          return (
            <div className={styles.inner}>
              <div className={styles.card}>
                <div className={styles.topCard}>
                  <img key={id} src={avatar} alt="product" />
                </div>
                <div className={styles.middleCard}>
                  <span id={styles.name}> {first_name + " " + last_name} </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyTeam;
