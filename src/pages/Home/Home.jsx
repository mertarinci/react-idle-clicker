import React, { useEffect, useState } from "react";
import "./Home.scss";
import Market from "../../components/Market/Market";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../../features/product/productSlice";

import Product from "../../components/Product/Product";

function Home() {
  const marketWindow = () => {
    const market = document.querySelector(".market").style;
    market.opacity = 1;
    market.visibility = "visible";
  };

  const dispatch = useDispatch();
  const prodState = useSelector((state) => state.product);

  useEffect(() => {
    const interval = setInterval(() => {
      prodState.forEach((item) => {
        dispatch(incrementByAmount(item.id));
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, prodState]);

  return (
    <div className="home">
      <Header />
      <Market className="market" />
      <Product prd={0} />
      <Product prd={1} />
      <button className="btn" onClick={() => marketWindow()}>
        Market
      </button>
    </div>
  );
}

export default Home;
