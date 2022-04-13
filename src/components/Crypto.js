import React, { useEffect, useState } from "react";
import axios from "axios";

import Unit from "./Unit";

function Crypto() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = "https://api2.binance.com/api/v3/ticker/24hr";

  useEffect(() => {
    const getCryptoData = () => {
      axios
        .get(baseURL)
        .then((response) => setCryptoData(response.data))
        .catch((error) => console.log(error))
        .then(() => setLoading(false));
    };
    getCryptoData();
  }, []);

  console.log(cryptoData.slice(0, 10));

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {cryptoData.slice(0, 10).map((item, index) => (
            <Unit
              key={index}
              symbol={item.symbol}
              openPrice={item.openPrice}
              lastPrice={item.lastPrice}
              highPrice={item.highPrice}
              lowPrice={item.lowPrice}
              closePrice={item.closePrice}
              prevClosePrice={item.prevClosePrice}
              priceChangePercent={item.priceChangePercent}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Crypto;
