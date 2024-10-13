import React, { useEffect, useState } from "react";
import { useCustomStyles } from "./styles";
import { Box, CircularProgress, IconButton } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { HOME_TITLE } from "../../utils/types/enum";
import UnstyledButtonCustom from "../../components/Button";
import SelectFilterComponent from "../../components/SelectFilter";
import BgMesh from "../../components/bg-mesh/BgMesh";
import { getExchangeRateFromApi } from "../../utils/api/api";

const Home = () => {
  const Classes = useCustomStyles();

  const [amount, setAmount] = useState<number>(10);
  const [fromCurrency, setFromCurrency] = useState<string>("INR");
  const [toCurrency, setToCurrency] = useState<string>("GIP ");
  const [result, setResult] = useState<string | number>("");
  const [isoading, setIsoading] = useState<boolean>(true);

  const getExchangeRate = async () => {
    setIsoading(true);
    try {
      const mainAPI = await getExchangeRateFromApi(fromCurrency, toCurrency);

      if (mainAPI.conversion_rate) {
        const rate = (mainAPI.conversion_rate * amount).toFixed(2);
        setResult(`${amount} ${fromCurrency} =  ${rate}  ${toCurrency}`);
      } else {
        console.error("Invalid conversion rate in API response.");
      }
    } catch (error) {
      console.error("Error fetching API:", error);
    } finally {
      setIsoading(false);
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getExchangeRate();
  };

  const handleSwapCountries = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    getExchangeRate();
  };

  useEffect(() => {
    getExchangeRate();
  }, []);

  return (
    <>
      <Box className={Classes.custom_container}>
        <Box className={Classes.main_content}>
          <form action="#" onSubmit={handleOnSubmit}>
            <input
              type="number"
              placeholder="Enter Currency Amout"
              className={Classes.custom_input}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />

            <Box className={Classes.box_warp}>
              <p style={{ margin: "0px" }}>{HOME_TITLE.FROM}</p>

              <SelectFilterComponent
                selectCurrency={fromCurrency}
                handleCountryChange={(e) => setFromCurrency(e.target.value)}
              />

              <IconButton
                onClick={handleSwapCountries}
                className={Classes.swap_icon}
              >
                <SwapVertIcon />
              </IconButton>

              <p className={Classes.min_text}>{HOME_TITLE.TO}</p>
              <SelectFilterComponent
                selectCurrency={toCurrency}
                handleCountryChange={(e) => setToCurrency(e.target.value)}
              />

              <h1 className={Classes.resultRate}>
                <span>{HOME_TITLE.RATE} :</span>{" "}
                {isoading ? (
                  <>
                    <Box sx={{ display: "flex", width:"40px" , height:'40px' }}>
                      <CircularProgress />
                    </Box>
                  </>
                ) : (
                  result
                )}
              </h1>

              <button
                type="submit"
                className={Classes.button_submit}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                }}
              >
                <UnstyledButtonCustom>
                  {HOME_TITLE.CHECKRATE}
                </UnstyledButtonCustom>
              </button>
            </Box>
          </form>
        </Box>
      </Box>
      <BgMesh />
    </>
  );
};

export default Home;
