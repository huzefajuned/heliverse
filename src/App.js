import "./App.css";
import React, { useState, useEffect } from "react";
import AllUsers from "./components/AllUsers/AllUsers";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTeam from "./components/MyTeam/MyTeam";
import Filter from "./components/Filter/Filter";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(20);

  const [totalItems, setTotalItems] = useState("jsonData.length");
  const [total_Page, setTotal_Page] = useState(Math.round(totalItems / limit));
  const [currentPage, setCurrentPage] = useState(1);
  // console.log("currentPage", currentPage);
  const [data, setData] = useState([]);
  console.log("data", data);
  console.log("currentPage", currentPage);

  // LOADING All DATA ONCE WHEN COMPONENT LOAD FOR THE FISRT TIME
  // AND SAVE IN A STATE FOR LATER USE!!
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("./data.json");
      await setData({
        user: response.data,
        totalItems: response.data?.length,
        total_Page: response.data?.length / 20,
      });
      setLoading(false);
    };
    fetchData();
  }, []);
  // for cart only
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    toast.success("Player Added");
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      <BrowserRouter>
        <Header
          limit={limit}
          setLimit={setLimit}
          data={data}
          setData={setData}
          loading={loading}
          setLoading={setLoading}
          totalItems={totalItems}
          setTotalItems={setTotalItems}
          total_Page={total_Page}
          setTotal_Page={setTotal_Page}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  limit={limit}
                  setLimit={setLimit}
                  data={data}
                  setData={setData}
                  loading={loading}
                  setLoading={setLoading}
                  totalItems={totalItems}
                  setTotalItems={setTotalItems}
                  total_Page={total_Page}
                  setTotal_Page={setTotal_Page}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />

                
                <AllUsers
                  limit={limit}
                  setLimit={setLimit}
                  data={data}
                  setData={setData}
                  loading={loading}
                  setLoading={setLoading}
                  handleChange={handleChange}
                  handleClick={handleClick}
                  cart={cart}
                  setCart={setCart}
                  total_Page={total_Page}
                  setTotal_Page={setTotal_Page}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            }
          />
          <Route
            path="/ViewTeam"
            element={
              <>
                <MyTeam cart={cart} setCart={setCart} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-left"
        autoClose={300}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />{" "}
    </>
  );
}

export default App;
