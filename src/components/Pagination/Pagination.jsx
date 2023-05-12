import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  totalpages,
  currentPage,
  setCurrentPage,
  loading,
  setLoading,
}) => {

  console.log(totalpages)
  const btnHandle = (i) => {
    setLoading(true);
    setCurrentPage(i + 1);
  };
  return (
    <>
      <div className={styles.container}>
        {Array.from(Array(totalpages), (e, i) => {
          return (
            <button id={styles.btn} key={i} onClick={() => btnHandle(i)}>
              {i + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
