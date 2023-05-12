import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import jsonData from "../../data.json";

import logo from "../../images/heliverse.png";
import { useNavigate } from "react-router-dom";
const Header = ({ setData, setLoading, data, totalItems, setTotalItems,totalpages, setTotalpages}) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(1);
console.log(totalpages)

  const onKeyPressHandler = (e) => {
    if (e.keyCode === 13) {
      setSearch(query);
      setLoading(true);
    }
  };

  useEffect(() => {
    const filteredData = jsonData.filter(
      (item) =>
        item.domain.toLowerCase()?.includes(search) ||
        item.email.toLowerCase()?.includes(search) ||
        item.first_name.toLowerCase()?.includes(search) ||
        item.last_name.toLowerCase()?.includes(search)
    );
    setTotalItems(filteredData.length);
    const totalItems = filteredData.length;
    const total_Page = Math.round(totalItems / limit);
    setData({
      data: jsonData.slice(currentPage * limit - 20, currentPage * limit),
  
    });
    setTotalpages(total_Page)
    // setTotalPage(total_Page)
    setLoading(false);
  }, [search]);

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img onClick={() => navigate("/")} src={logo} alt="" />
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search By Name,Gender,Domain ..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          onKeyDown={(e) => onKeyPressHandler(e)}
        />
      </div>
    </div>
  );
};

export default Header;
