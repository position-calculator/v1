import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';

import { Input } from '../../components';

import { useCalculator } from './hooks';
import useStyles from './useStyles';

const Calculator = ({ saveValues }) => {
  const { values, handleChange, isAllInputsFulfilled } = useCalculator();

  const classes = useStyles();

  const handleClick = () => saveValues(values);

  return (
    <Paper className={classes.paper}>
    <Typography className={classes.headline} variant='h5'>Calculator</Typography>
      <Input
        onChange={handleChange('risk')}
        value={values.risk}
        label='Risk per position'
        className={classes.input}
        labelWidth={125}
        sign='%'
      />
      <Input
        onChange={handleChange('balance')}
        value={values.balance}
        label='Balance'
        className={classes.input}
        labelWidth={65}
        sign='$'
      />
      <Input
        onChange={handleChange('stopLoss')}
        value={values.stopLoss}
        label='Stop loss'
        className={classes.input}
        labelWidth={75}
        sign='%'
      />
      <Input
        onChange={handleChange('takeProfit')}
        value={values.takeProfit}
        label='Take profit'
        className={classes.input}
        labelWidth={85}
        sign='%'
      />
      <Button
        variant="contained"
        disableElevation
        color='secondary'
        onClick={handleClick}
        disabled={!isAllInputsFulfilled}
        className={classes.button}
      >
        Calculate
      </Button>
    </Paper>
  );
};

export default Calculator;
