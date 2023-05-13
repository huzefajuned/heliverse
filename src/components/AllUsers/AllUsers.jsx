import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
// import usersData from "../../data.json";
import Loading from "../Loading/Loading";
import styles from "./AllUsers.module.css";
import Pagination from "../Pagination/Pagination";
import MyTeam from "../MyTeam/MyTeam";
import ViewTeamBtn from "../ViewTeamBtn/ViewTeamBtn";

const AllUsers = ({
  limit,
  setLimit,
  data,
  setData,
  loading,
  setLoading,
  handleChange,
  handleClick,
  cart,
  setCart,
  total_Page,
  setTotal_Page,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className={styles.main}>
      {loading == true ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {data.user?.length === 0 ? (
            <Loading />
          ) : (
            <>
              {cart.length === 0 ? (
                <p style={{ textAlign: "center", color: "wheat" }}>
                  U are not Created any team. <br /> Please Create A Team.
                </p>
              ) : (
                <ViewTeamBtn cart={cart} setCart={setCart} />
              )}
              <UserCard
                data={data}
                setData={setData}
                limit={limit}
                setLimit={setLimit}
                loading={loading}
                setLoading={loading}
                handleChange={handleChange}
                handleClick={handleClick}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Pagination
                data={data}
                setData={setData}
                total_Page={total_Page}
                setTotal_Page={setTotal_Page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                loading={loading}
                setLoading={setLoading}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AllUsers;
