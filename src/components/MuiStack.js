import React, { useEffect, useState } from "react";
import axios from "axios";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MuiStack() {
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

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {cryptoData.slice(0, 20).map((item, index) => (
              <Item>{cryptoData[index].symbol}</Item>
            ))}
          </Stack>
        </div>
      )}
    </div>
  );
}

export default MuiStack;
