import { Box } from "@mui/material";
import React, { FC } from "react";
import currencyCode from "../../src/pages/home/currencyCodeMockupData.json";

interface IpropsSelect {
  selectCurrency: string;
  handleCountryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectComponent: FC<IpropsSelect> = ({
  selectCurrency,
  handleCountryChange,
}) => {
  const countryCode = selectCurrency.substring(0, 2);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt={""} />
      <select
        name=""
        id=""
        value={selectCurrency}
        onChange={handleCountryChange}
      >
        {currencyCode.map((data, index) => {
          return <option key={index} value={data}>{data}</option>;
        })}
      </select>
    </Box>
  );
};

export default SelectComponent;
