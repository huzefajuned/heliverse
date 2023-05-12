import "./App.css";
import React, { useState, useEffect } from "react";
import AllUsers from "./components/AllUsers/AllUsers";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsonData from "./data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTeam from "./components/MyTeam/MyTeam";
import Filter from "./components/Filter/Filter";

function App() {
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(20);

  const [totalItems, setTotalItems] = useState(jsonData.length);
  const [totalpages, setTotalpages] = useState(Math.round(totalItems / limit));
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([]);
  console.log(data)
  useEffect(() => {
    setData({
      data: jsonData.slice(currentPage * limit - 20, currentPage * limit),
      totalItems,
      totalpages,
    });
    setLoading(false);
  }, [currentPage]);

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
          totalpages={totalpages}
          setTotalpages={setTotalpages}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter />
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
                  totalpages={totalpages}
                  setTotalpages={setTotalpages}
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
