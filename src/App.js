import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Calculator, PositionValues } from './main-components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    minHeight: '900px',
    alignItems: 'center',
  },
}));

const App = () => {
  const [values, setValues] = useState(null);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Calculator saveValues={setValues} />
      <PositionValues values={values} />
    </div>
  );
};

export default App;
