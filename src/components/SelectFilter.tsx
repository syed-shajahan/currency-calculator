// src/components/SelectFilterComponent.tsx
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import currencyData from '../pages/home/currencyCodeMockupData.json';
import { Box } from '@mui/material';
import { useCustomStyles } from '../pages/home/styles';

interface CurrencyOption {
  code: string;
  name: string;
}

interface IpropsSelect {
  selectCurrency: string;
  handleCountryChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const SelectFilterComponent: React.FC<IpropsSelect> = ({
  selectCurrency,
  handleCountryChange,
}) => {
  const Classes = useCustomStyles();

  const countryCode = selectCurrency.substring(0, 2);
  return (
    <Box className={Classes.select_container}>
      <Box className={Classes.flag}>
        <img
          style={{ marginRight: '10px' }}
          src={`https://flagsapi.com/${countryCode}/flat/64.png`}
          alt={''}
        />
      </Box>
      <Autocomplete
        sx={{ width: '100%' }}
        options={currencyData}
        getOptionLabel={(option: CurrencyOption) =>
          `${option.code} - ${option.name}`
        }
        onChange={(event, newValue) => {
          const code = newValue?.code || '';
          handleCountryChange({
            target: {
              value: code,
            },
          } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Select Currency" margin="normal" />
        )}
        renderOption={(props, option) => (
          <li {...props}>
            {option.code} - {option.name}
          </li>
        )}
      />
    </Box>
  );
};

export default SelectFilterComponent;
