import React, { useEffect } from "react";
import "./Home.scss";
import Market from "../../components/Market/Market";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../../features/product/coreSlice";

import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";

function Home() {
  const marketWindow = () => {
    const market = document.querySelector(".market").style;
    market.opacity = 1;
    market.visibility = "visible";
  };

  const dispatch = useDispatch();
  const prodState = useSelector((state) => state.core.product);

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

      <div className="game">
        <div className="products">
          <Product prd={0} />
          <Product prd={1} />
          <Product prd={2} />
          <Product prd={3} />
          <Product prd={1} />
          <Product prd={1} />
          <Product prd={1} />
          <Product prd={1} />
        </div>

        <div className="rightMenu"></div>
      </div>

      {/* <button className="btn" onClick={() => marketWindow()}>
        Market
      </button> */}

      <Footer />
    </div>
  );
}

export default Home;
