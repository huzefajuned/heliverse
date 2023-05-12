import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import { toast } from "react-toastify";
import jsonData from "../../data.json";

const genders = [
  "All",
  "Male",
  "Female",
  "Agender",
  "Bigender",
  "Polygender",
  "Non-binary",
  "Genderqueer",
  "Genderfluid",
];

const availability = ["Availability", "All", "Available", "Unavailable"];
const domains = [
  "domain",
  "All",
  "Sales",
  "Finance",
  "Marketing",
  "Management",
  "IT",
  "UI Designing",
  "Business Development",
];

const Filter = () => {
  const [selectedGender, setSelectedGender] = useState();
  const [isAvailable, setIsAvailable] = useState("");
  const [domain, setDomain] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;
  //handles gender filtering
  const handleGenderFilter = (event) => {
    setSelectedGender(event.target.value);
    setCurrentPage(1);
    toast.info(event.target.value);
  };
  //handles availability check
  const handleAvailablity = (event) => {
    setIsAvailable(event.target.value);
    setCurrentPage(1);
    toast.info(event.target.value);
  };
  //handles domain filtering
  const handleDomain = (event) => {
    setDomain(event.target.value);
    setCurrentPage(1);
    toast.info(event.target.value);
  };

  // filtering logic for By Gender
  useEffect(() => {
    const filteredData = jsonData.filter((item) =>
      item.gender.includes(selectedGender)
    );
    const totalItems = filteredData.length;
    const totalpages = Math.round(totalItems / limit);
    // console.log("totalItems", totalItems);
    // console.log("totalpages", totalpages);
  }, [selectedGender]);

  return (
    <div className={styles.main}>
      <div className={styles.filter}>
        <select onChange={handleGenderFilter}>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.available}>
        <select value={isAvailable} onChange={handleAvailablity}>
          {availability.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.domain}>
        <select value={domain} onChange={handleDomain}>
          {domains.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
