import React, { useEffect, useState } from "react";
import axios from "axios";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Unit from "./Unit";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {cryptoData.slice(0, 20).map((item, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item>
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
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Crypto;
