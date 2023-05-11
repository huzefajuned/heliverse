import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import usersData from "../../data.json";

const AllUsers = ({ limit, setLimit, data, setData }) => {
  return (
    <div>
      AllUsers
      <UserCard data={data} setData={setData} limit={limit} setLimit={setLimit} />
    </div>
  );
};

export default AllUsers;
