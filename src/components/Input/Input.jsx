import React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@material-ui/core';

const Input = ({ value, onChange, label, labelWidth, sign, className }) => (
  <FormControl className={className} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-amount" color='secondary'>{label}</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      value={value}
      onChange={onChange}
      startAdornment={<InputAdornment position="start">{sign}</InputAdornment>}
      labelWidth={labelWidth}
      required
      color='secondary'
      type='number'
    />
  </FormControl>
);

export default Input;
