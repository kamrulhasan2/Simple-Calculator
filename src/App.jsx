import React, { useState } from 'react';
import './App.css';
import InputSection from './components/inputs/InputSection';
import OperationSection from './components/operations/OperationSection';
import HistorySection from './components/history/HistorySection';

const initalInputState = {
  a: 0,
  b: 0,
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
    

    setHistories([history, ...histories]);
  }

  const handleRestoreBtn  = (history)=>{
    setInputState({ ...history.inputs});
    setResult(history.result);
    setRestoredHistory(history.id);
  }

  return (
    <div className='container'>
      <h2 className='result'>Result: {result} </h2>
      <InputSection inputs={inputState} inputStateHandeler={inputStateHandeler} />

      <OperationSection 
        handelArithmeticOps={handelArithmeticOps} 
        handleClearOps={handleClearOps}
      />

      
      <HistorySection 
        handleRestoreBtn={handleRestoreBtn} 
        histories={histories} 
        restoredHistory={restoredHistory}
      />

    </div>
  )
}

export default App;