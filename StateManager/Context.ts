import React = require('react');

import { steps } from '../script';

const initialstate = {
  step: 0,
  code: '',
  speech: '3,2,1',
};

export const Store = initialstate;

const GlobalContext = React.createContext(Store);

export const GlobalReducer = (state, { type }) => {
  switch (type) {
    case 'nextStep': {
      const next = steps[state.step];
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
      break;
    }
    case 'reset': {
      return initialstate;
      break;
    }
  }
  return state;
};

export default GlobalContext;
