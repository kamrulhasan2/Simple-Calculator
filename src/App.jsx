import React, { useState } from 'react';
import './App.css';
import NumberField from './components/ui/NumberField';
import Button from './components/ui/Button';
import InputSection from './components/inputs/InputSection';
import OperationSection from './components/operations/OperationSection';

const initalInputState = {
  a: 20,
  b: 10,
}

function* generateId(){
  let id = 0;

  while(true){
    yield id++;
  }
}

const getId = generateId();


function App() {

  const [inputState, setInputState] = useState({...initalInputState});
  const [result,setResult] = useState(0);
  const [histories,setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

  const inputStateHandeler = (e)=>{
    setInputState({
      ...inputState,
      [e.target.name] : parseInt(e.target.value)
    })
   }

  const handleClearOps = ()=> {
    setInputState({
      ...initalInputState
    });
    setResult(0);
  }

  const handelArithmeticOps = (Operation)=>{

    if(!inputState.a || !inputState.b){
      alert('Invalid input');
      return;
    }

    const f = new Function('Opration',`return ${inputState.a} ${Operation} ${inputState.b}`);
    const result = f(Operation);
    setResult(result);

    const history ={
      id: getId.next().value,
      inputs: {...inputState},
      date: new Date(),
      Operation,
      result
    }
    
    // setHistories({history, ...histories});
    setHistories([history, ...histories]);
  }

  const handleRestoreBtn  = (history)=>{
    setInputState({ ...history.inputs});
    setResult(history.result);
    setRestoredHistory(history.id);
  }

  return (
    <div>
      <h2>Result: {result} </h2>
      <InputSection inputs={inputState} inputStateHandeler={inputStateHandeler} />

      <OperationSection 
        handelArithmeticOps={handelArithmeticOps} 
        handleClearOps={handleClearOps}
      />

      
      <div>
        <p>History</p>
        {histories.length === 0 ? (
          <p>
            <small>There is no history</small>
          </p>
        ) : (
          <ul>
            {histories.map((historyItem) => (
              <li key={historyItem.id}>
                <p>
                  Operations: {historyItem.inputs.a} {historyItem.Operation}{' '}
                  {historyItem.inputs.b}, Result = {historyItem.result}
                </p>
                <small>
                  {historyItem.date.toLocaleDateString()}{' '}
                  {historyItem.date.toLocaleTimeString()}
                </small>

                <button onClick={()=>handleRestoreBtn(historyItem)} disabled={restoredHistory !== null && restoredHistory === historyItem.id} >Restore</button>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  )
}

export default App;