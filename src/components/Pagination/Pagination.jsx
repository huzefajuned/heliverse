import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  total_Page,
  setTotal_Page,
  setCurrentPage,
  loading,
  currentPage,
  setLoading,
  data,
  setData,
}) => {
  const btnHandle = (i) => {
    setCurrentPage(i + 1);
  };

  const pageNumbers = [...Array(data.total_Page).keys()].slice();
  // console.log(pageNumbers);
  return (
    <>
      <div className={styles.container}>
        {pageNumbers?.map((elem) => {
          return (
            <button id={styles.btn} key={elem} onClick={() => btnHandle(elem)}>
              {elem + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
