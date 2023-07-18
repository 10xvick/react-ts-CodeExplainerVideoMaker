import * as React from 'react';
import './style.css';
import CodeWindow from './Code/CodeWindow';
import GlobalContext, { GlobalReducer, Store } from './StateManager/Context';
import { Text2Speech } from './Speech/Speech';

export default function App() {
  const [state, dispatch] = React.useReducer(GlobalReducer, Store);
  const [start, setStart] = React.useState(false);
  return (
    <div>
      <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
        <div onClick={() => setStart((e) => !e)}>
          {start ? <Main /> : <div>
            <button> start </button>
            <button onClick={()=>dispatch({type:'reset'})}> reset </button>
          </div>}  
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

const Main = () => {
  const {
    state: { step, code, speech },
    dispatch,
  } = React.useContext<any>(GlobalContext);


  const [text, setText] = React.useState('');
  const [speeker,setspeeker] = React.useState();

  React.useEffect(() => {
    let timeout;
    const next = () => {
      timeout = setTimeout(() => {
        dispatch({ type: 'nextStep' });
      }, 500);
    };

    const speeker = Text2Speech(speech, next, setText);
    setspeeker(speeker);

    return () => {
      clearTimeout(timeout);
      speeker?.cancel();
    };
  }, [step]);

  React.useEffect(()=>()=>{
      speeker?.cancel();
      console.log('sp',speeker);
    }
  ,[])

  return (
    <React.Fragment>
      <CodeWindow code={code} />
      {text}
    </React.Fragment>
  );
};
