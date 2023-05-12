import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import jsonData from "../../data.json";

import logo from "../../images/heliverse.png";
import { useNavigate } from "react-router-dom";
const Header = ({ setData, setLoading, data }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const onKeyPressHandler = (e) => {
    if (e.keyCode === 13) {
      setSearch(query);
      setLoading(true);
    }
  };

  useEffect(() => {
    const filteredData = data.filter(
      (item) =>
        item.domain.toLowerCase()?.includes(search) ||
        item.email.toLowerCase()?.includes(search) ||
        item.first_name.toLowerCase()?.includes(search) ||
        item.last_name.toLowerCase()?.includes(search)
    );
    setData(filteredData);
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
          placeholder="Search Electronics"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          onKeyDown={(e) => onKeyPressHandler(e)}
        />
      </div>
    </div>
  );
};

export default Header;
