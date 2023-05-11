import React from "react";
import styles from "./UserCard.module.css";

const UserCard = ({ data, setData, limit, setLimit }) => {
  return (
    <>
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
        return console.log(email);
      })}
      <div className={styles.card}>
        <div className={styles.topCard}>
          <img
            // key={index}
            // src={product_Thumbnail[0]?.path}
            alt="product"
            // onClick={() => navToViewPage(currentElem)}
          />
        </div>
        <div className={styles.middleCard}>
          {/* <span id={styles.name}> {product_Name.substring(0, 12)} </span> */}
          {/* <span id={styles.price}> ₹{product_Price} </span> */}
        </div>

        <div className={styles.bottomCard}>
          <p id={styles.description}>
            {/* {product_shortDescription?.substring(0, 30) + " ..."} */}
          </p>
          {/* <button
            id={styles.addCart}
            onClick={
              product_Quantity == 0
                ? () => {
                    toast.error("Out Of Stock");
                  }
                : () => {
                    handleClick(currentElem);
                  }
            }
          > */}
          {/* {product_Quantity == 0 ? "Out Of Stock" : "Add to cart"} */}
          {/* </button> */}
        </div>
      </div>
    </>
  );
};

export default UserCard;
