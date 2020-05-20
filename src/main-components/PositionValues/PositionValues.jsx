import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  paper: {
    width: 350,
    margin: 20
  },
  value: {
    fontWeight: 'bold',
  }
});

const createData = (label, value) => ({ label, value });

const generatePositionViewData = (values) => {
  const leverage = values ? values.risk / values.stopLoss : 0;
  const riskRatio = values ? values.takeProfit / values.stopLoss : 0;
  const balanceWithLeverage = values ? values.balance * leverage : 0;
  const possibleProfit = values ? (balanceWithLeverage * values.takeProfit) / 100 : 0;
  const possibleLoss = values ? (balanceWithLeverage * values.stopLoss) / 100 : 0;

  return [
    createData('Risk ratio', riskRatio ? `${riskRatio.toFixed(2)} : 1` : 0.0.toFixed(2)),
    createData('Max leverage', leverage.toFixed(2)),
    createData('Balance with leverage', `$${balanceWithLeverage.toFixed(2)}`),
    createData('Possible loss', `$${possibleLoss.toFixed(2)}`),
    createData('Possible profit', `$${possibleProfit.toFixed(2)}`),
  ];
};

const PositionValues = React.forwardRef(({ values }, ref) => {
  const classes = useStyles();

  const positionValues = generatePositionViewData(values);

  return (
    <TableContainer className={classes.paper} ref={ref} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stat</TableCell>
            <TableCell align='right'>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positionValues.map((row) => (
            <TableRow key={row.label}>
              <TableCell component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell className={classes.value} align='right'>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default PositionValues;
