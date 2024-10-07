import React, { useState } from "react";
import { useCustomStyles } from "./styles";
import { Box, IconButton } from "@mui/material";
import SelectComponent from "../../components/SelectComponent";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const Home = () => {
  const Classes = useCustomStyles();

  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("RSD");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [result, setResult] = useState<string | number>("");

  const handleSwapCountries = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getExchangeRate = async () => {
    try {
      const Api_URL = `https://v6.exchangerate-api.com/v6/6ba17943c3e5527a91cfb66b/pair/${fromCurrency}/${toCurrency}`;
      const data = await fetch(Api_URL);
      const res = await data.json();

      if (res.conversion_rate) {
        const rate = (res.conversion_rate * amount).toFixed();
        setResult(Number(rate));
      } else {
        console.error("Invalid conversion rate in API response.");
      }
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getExchangeRate();
  };

  return (
    <Box className={Classes.custom_container}>
      <Box className={Classes.main_content}>
        <form action="#" onSubmit={handleOnSubmit}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <p>from</p>
          <SelectComponent
            selectCurrency={fromCurrency}
            handleCountryChange={(e) => setFromCurrency(e.target.value)}
          />

          <IconButton onClick={handleSwapCountries}>
            <SwapVertIcon />
          </IconButton>

          <p>to</p>
          <SelectComponent
            selectCurrency={toCurrency}
            handleCountryChange={(e) => setToCurrency(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </Box>

      {/* Render result only if it's available */}
      <h1>Rate: {result}</h1>
    </Box>
  );
};

export default Home;
