import "./App.css";
import React, { useState, useEffect } from "react";
import AllUsers from "./components/AllUsers/AllUsers";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import usersData from "./data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(20);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(usersData.slice(0, limit));
  }, []);
  return (
    <>
      <Header />
      <AllUsers
        limit={limit}
        setLimit={setLimit}
        data={data}
        setData={setData}
        loading={loading}
        setLoading={setLoading}
      />
      <Pagination />
      <ToastContainer />
    </>
  );
}

export default App;
