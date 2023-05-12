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

function App() {
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(20);

  const totalItems = jsonData.length;
  const totalpages = totalItems / Math.ceil(limit);

  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData.slice(currentPage * limit - 20, currentPage * limit));
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  limit={limit}
                  setLimit={setLimit}
                  data={data}
                  setData={setData}
                  loading={loading}
                  setLoading={setLoading}
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
                  totalpages={totalpages}
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
                <Header
                  limit={limit}
                  setLimit={setLimit}
                  data={data}
                  setData={setData}
                  loading={loading}
                  setLoading={setLoading}
                />
                <MyTeam cart={cart} setCart={setCart} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
