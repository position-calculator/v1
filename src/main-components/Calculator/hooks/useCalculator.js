import { useState } from 'react';

import * as constants from '../constants';

const useCalculator = () => {
  const [values, setValues] = useState(constants.INITIAL_STATE);

  const handleChange = prop => event => {
    event.persist();

    setValues(prevValues => ({ ...prevValues, [prop]: event.target.value }));
  };

  const isAllInputsFulfilled = Object.values(values).every(value => !!value);

  return { values, handleChange, isAllInputsFulfilled };
};

export default useCalculator;
