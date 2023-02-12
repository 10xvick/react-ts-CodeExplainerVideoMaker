import * as React from 'react';
import './style.css';
import CodeWindow from './Code/CodeWindow';
import GlobalContext, { GlobalReducer, Store } from './StateManager/Context';
import { Text2Speech } from './Speech/Speech';

export default function App() {
  const [state, dispatch] = React.useReducer(GlobalReducer, Store);

  return (
    <div>
      <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Main />
      </GlobalContext.Provider>
    </div>
  );
}

const Main = () => {
  const {
    state: { step, code, speech },
    dispatch,
  } = React.useContext<any>(GlobalContext);

  React.useEffect(() => {
    Text2Speech(speech, () => {
      setTimeout(() => dispatch({ type: 'nextStep' }), 500);
    });
  }, [step]);

  return (
    <React.Fragment>
      <CodeWindow code={code} />
    </React.Fragment>
  );
};
