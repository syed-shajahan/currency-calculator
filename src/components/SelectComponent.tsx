import { Box } from '@mui/material';
import React, { FC } from 'react';
import currencyCode from '../../src/pages/home/currencyCodeMockupData.json';

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
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: '50px',
          height: '50px',
          overflow: 'hidden',
          borderRadius: '10px',
        }}
      >
        <img
          style={{ marginRight: '10px' }}
          src={`https://flagsapi.com/${countryCode}/flat/64.png`}
          alt={''}
        />
      </Box>
      <select
        name=""
        id=""
        value={selectCurrency}
        onChange={handleCountryChange}
      >
        {currencyCode.map((data, index) => {
          return (
            <option key={index} value={data.code}>
              {data.code}
            </option>
          );
        })}
      </select>
    </Box>
  );
};

export default SelectComponent;
