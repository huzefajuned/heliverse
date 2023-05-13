import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import axios from "axios";

import logo from "../../images/heliverse.png";
import { useNavigate } from "react-router-dom";
const Header = ({
  setData,
  setLoading,
  data,
  totalItems,
  setTotalItems,
  totalpages,
  setTotalpages,
}) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const onKeyPressHandler = (e) => {
    if (e.keyCode === 13) {
      setSearch(query);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("./data.json");
      const originalData = response.data;
      const filteredData = await originalData.filter(
        (item) =>
          item.domain.toLowerCase()?.includes(search) ||
          item.email.toLowerCase()?.includes(search) ||
          item.first_name.toLowerCase()?.includes(search) ||
          item.last_name.toLowerCase()?.includes(search) ||
          item.gender.toLowerCase()?.includes(search)
      );

      await setData({
        user: filteredData,
        totalItems: filteredData.length,
        total_Page: Math.ceil(filteredData.length / 20),
      });
      await setCurrentPage(1);
    };
    fetchData();
  }, [search]);

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img onClick={() => navigate("/")} src={logo} alt="" />
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search By Random Name,Gender,Domain ..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          onKeyDown={(e) => onKeyPressHandler(e)}
        />
      </div>
    </div>
  );
};

export default Header;
