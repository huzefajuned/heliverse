import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import { toast } from "react-toastify";
import jsonData from "../../data.json";
import axios from "axios";

const genders = [
  "Gender",
  "Male",
  "Female",
  "Agender",
  "Bigender",
  "Polygender",
  "Non-binary",
  "Genderqueer",
  "Genderfluid",
];

const availability = ["Availability", "Available", "Unavailable"];
const domains = [
  "domain",
  "Sales",
  "Finance",
  "Marketing",
  "Management",
  "IT",
  "UI Designing",
  "Business Development",
];

const Filter = ({
  setData,
  setLoading,
  data,
  totalItems,
  setTotalItems,
  total_Page,
  setTotal_Page,
}) => {
  const [selectedGender, setSelectedGender] = useState("");
  // console.log("selectedGender", selectedGender);
  const [isAvailable, setIsAvailable] = useState("");
  // console.log(data?.user?.length);
  const [domain, setDomain] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [filterApiData, setFilterApiData] = useState([]);

  const handleGenderFilter = (event) => {
    setSelectedGender(event.target.value);
    toast.info(event.target.value);
  };
  //handles availability check
  const handleAvailablity = (event) => {
    if (event.target.value === "Available") {
      setIsAvailable(true);
    }
    if (event.target.value === "Unavailable") {
      setIsAvailable(false);
    }
    toast.info(event.target.value);
  };
  //handles domain filtering
  const handleDomain = (event) => {
    setDomain(event.target.value);
    toast.info(event.target.value);
  };
  //Loading all data first and then after filtering for specif inputs and then after save it to state variable
  // for only selectedGender
  useEffect(() => {
    if (selectedGender.length === 0) {
      return;
    }
    const fetchData = async () => {
      const response = await axios.get("./data.json");
      const originalData = response.data;
      // console.log(domain);
      const filteredData = originalData.filter(
        (item) => item.gender.indexOf(selectedGender) !== -1
      );

      await setData({
        user: filteredData,
        totalItems: filteredData.length,
        total_Page: Math.ceil(filteredData.length / 20),
      });
    };
    fetchData();
  }, [selectedGender]);

  //Loading all data first and then after filtering for specif inputs and then after save it to state variable
  // for only isAvailability check
  useEffect(() => {
    if (isAvailable.length === 0) {
      return;
    }
    console.log("isAvailable", isAvailable);
    const fetchData = async () => {
      const response = await axios.get("./data.json");
      const originalData = response.data;
      console.log(originalData);
      const filteredData = originalData.filter(
        (item) => item.available == isAvailable
      );

      await setData({
        user: filteredData,
        totalItems: filteredData.length,
        total_Page: Math.ceil(filteredData.length / 20),
      });
    };
    fetchData();
  }, [isAvailable]);

    //Loading all data first and then after filtering for specif inputs and then after save it to state variable
  // for only selectedGender
  useEffect(() => {
    if (domain.length === 0) {
      return;
    }
    const fetchData = async () => {
      const response = await axios.get("./data.json");
      const originalData = response.data;
      // console.log(domain);
      const filteredData = originalData.filter(
        (item) => item.domain.indexOf(domain) !== -1
      );

      await setData({
        user: filteredData,
        totalItems: filteredData.length,
        total_Page: Math.ceil(filteredData.length / 20),
      });
    };
    fetchData();
  }, [domain]);


  

  return (
    <div className={styles.main}>
      <div className={styles.filter}>
        <select onChange={(event) => handleGenderFilter(event)}>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.available}>
        <select onChange={(event) => handleAvailablity(event)}>
          {availability.map((available) => (
            <option key={available} value={available}>
              {available}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.domain}>
        <select onChange={(event) => handleDomain(event)}>
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
