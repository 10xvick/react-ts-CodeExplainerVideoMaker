import React = require('react');

import { steps } from '../script';

const stepsx = steps.slice(0,2);

export const Store = {
  step: 0,
  code: '',
  speech: '3,2,1',
};

const GlobalContext = React.createContext(Store);

export const GlobalReducer = (state, { type, payload }) => {
  const steps = stepsx;
  switch (type) {
    case 'nextStep': {
      const next = steps[state.step];
      console.log(next, '-');
      if (next)
        return {
          ...state,
          step: next.step,
          code: next.code,
          speech: next.description,
        };
      else
        return {
          step: '-1',
          code: steps.map((e) => e.code).join('\n\n'),
          speech: `the final code should look like this`,
        };
    }
  }
  return state;
};

export default GlobalContext;
