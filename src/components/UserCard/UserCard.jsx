import React, { useEffect } from "react";
import styles from "./UserCard.module.css";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const UserCard = ({
  data,
  setData,
  limit,
  setLimit,
  loading,
  setLoading,
  handleChange,
  handleClick,
}) => {

  return (
    <>
      <div className={styles.main}>
        {data?.map((user) => {
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

          // navigating current  item into new page.... using useLocation
   
          return (
            <>
              <div className={styles.card}>
                <div className={styles.topCard}>
                  <img key={id} src={avatar} alt="product" />
                </div>
                <div className={styles.middleCard}>
                  <span id={styles.name}> {first_name + " " + last_name} </span>
                </div>

                <div className={styles.bottomCard}>
                  <p id={styles.description}> <span style={{ color:"blue"}}>Domain - </span>  {domain?.substring(0,11)}</p>
                  <button
                    id={styles.addCart}
                    onClick={
                      available == false
                        ? () => {
                            toast.error("Player Not Aavilable");
                          }
                        : () => {
                            handleClick(user);
                          }
                    }
                  >
                    {available == false ? "Player Not Aavilable" : "Add to Team"}
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserCard;
