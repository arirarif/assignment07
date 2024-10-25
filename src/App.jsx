import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import PlayerList from "./components/PlayerList/PlayerList";

function App() {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    // Event listener for adding coins
    const addCoinListener = (event) => {
      setCoins((prevCoins) => prevCoins + event.detail.amount);
    };

    // Add event listener for claiming coins
    window.addEventListener("addCoins", addCoinListener);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("addCoins", addCoinListener);
    };
  }, []);

  const handlePurchase = (playerPrice) => {
    if (coins >= playerPrice) {
      setCoins(coins - playerPrice);
      return true;
    }
    return false;
  };

  return (
    <>
      <Header coins={coins} />
      <Banner />
      <PlayerList coins={coins} onPurchase={handlePurchase} />
    </>
  );
}

export default App;
