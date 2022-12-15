import React, { useEffect } from "react";
import "./Home.scss";
import Market from "../../components/Market/Market";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementByAmount,
  sendNotification,
} from "../../features/product/coreSlice";

import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import RightMenu from "../../components/RightMenu/RightMenu";
import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";
import PotionScreen from "../../components/PotionScreen/PotionScreen";

function Home() {
  const dispatch = useDispatch();
  const prodState = useSelector((state) => state.core.product);
  const userState = useSelector((state) => state.core.user);

  useEffect(() => {
    const interval = setInterval(() => {
      prodState.forEach((item) => {
        dispatch(incrementByAmount(item.id));
      });
    }, 1000);

    const notificationInt = setInterval(() => {
      dispatch(
        sendNotification({
          not: "Don't forget to check upgrades!",
          color: "#a460ed",
        })
      );
    }, 60000);
    return () => {
      clearInterval(interval);
      clearInterval(notificationInt);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userState]);

  return (
    <div className="home">
      <Header />
      <Market className="market" />
      <PotionScreen />
      {userState?.isNewPlayer ? <WelcomeScreen /> : <></>}
      <div
        style={{ opacity: userState?.isNewPlayer ? 0.2 : 1 }}
        className="game"
      >
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
