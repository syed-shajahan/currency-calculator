import React, { ReactElement, useState } from "react";

import { useCustomStyles } from "./styles";
import { Box, IconButton } from "@mui/material";
import SelectComponent from "../../components/SelectComponent";
import SwapVertIcon from "@mui/icons-material/SwapVert";
const Home = () => {
  const Classes = useCustomStyles();

  const [fromCurrency, setFromCurrency] = useState<string>("RSD");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [input, setInput] = useState<string>("USD");

  const handleSwapCountries = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box className={Classes.custom_container}>
      <Box className={Classes.main_content}>
        <form action="#" onSubmit={handleOnSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value.toUpperCase());
            }}
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
        </form>
      </Box>
    </Box>
  );
};

export default Home;
