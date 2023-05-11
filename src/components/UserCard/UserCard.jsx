import React from "react";
import styles from "./UserCard.module.css";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";

const UserCard = ({ data, setData, limit, setLimit, loading, setLoading }) => {
  const jsonData = useSelector((state) => state.json);
  console.log("jsonData", jsonData);
  return (
    <>
      {jsonData == true ? (
        <Loading />
      ) : (
        <div className={styles.main}>
          {data.map((user) => {
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
              <>
                <div className={styles.card}>
                  <div className={styles.topCard}>
                    <img
                      key={id}
                      src={avatar}
                      alt="product"
                      // onClick={() => navToViewPage(currentElem)}
                    />
                  </div>
                  <div className={styles.middleCard}>
                    <span id={styles.name}>
                      {" "}
                      {first_name + " " + last_name}{" "}
                    </span>
                    {/* <span id={styles.price}> ₹{product_Price} </span> */}
                  </div>

                  <div className={styles.bottomCard}>
                    <p id={styles.description}>
                      {/* {product_shortDescription?.substring(0, 30) + " ..."} */}
                    </p>
                    <button
                      id={styles.addCart}
                      onClick={
                        available == false
                          ? () => {
                              toast.error("Not Available");
                            }
                          : () => {
                              // handleClick(currentElem);
                            }
                      }
                    >
                      {available == false ? "Not Available" : "Make A team"}
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default UserCard;
