import React, { useEffect } from "react";
import "./Home.scss";
import Market from "../../components/Market/Market";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../../features/product/coreSlice";

import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import RightMenu from "../../components/RightMenu/RightMenu";

function Home() {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
          <Product prd={4} />
          <Product prd={5} />
          <Product prd={6} />
          <Product prd={7} />
        </div>

        <RightMenu />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
