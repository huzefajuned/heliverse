import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import usersData from "../../data.json";
import styles from "./AllUsers.module.css";

const AllUsers = ({ limit, setLimit, data, setData, loading, setLoading }) => {

  return (
    <div className={styles.main}>
      AllUsers
      <UserCard
        data={data}
        setData={setData}
        limit={limit}
        setLimit={setLimit}
        loading={loading}
        setLoading={loading}
      />
    </div>
  );
};

export default AllUsers;
