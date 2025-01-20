import React, { useState } from 'react';
import Button from '../ui/Button';
import PropTypes from 'prop-types';

function HistoryItem({historyItem,handleRestoreBtn,disabled}) {

    const [show,setShow] = useState(false);

    const handelToggle = ()=>{
        setShow(!show);
    }

  return (
    <li key={historyItem.id} style={{fontSize:'0.8rem',margin:'0.5rem'}}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                    <p>
                    Operations: {historyItem.inputs.a} {historyItem.Operation}{' '}
                    {historyItem.inputs.b}, Result = {historyItem.result}
                    </p>
                    <div>
                        <Button text={show ? 'hide' : 'show' } onClick={handelToggle} customStyle={{fontSize: '0.5rem',fontWeight:'bold', padding:'0.3rem',color:'#ddd',background:'#333',borderRadius:'0.3rem'}} />
                    </div>
                </div>

                {show && (
                    <>
                        <small>
                        {historyItem.date.toLocaleDateString()}{' '}
                        {historyItem.date.toLocaleTimeString()}
                        </small>

                        <Button 
                        text={'Restore'} 
                        onClick={()=>handleRestoreBtn(historyItem)}
                        disabled={disabled}
                        customStyle={{fontSize: '0.5rem', padding:'0.3rem 0.5rem',color:'#fff',fontWeight:'bold',background:'#111',margin:'0.7rem',borderRadius:'0.3rem'}}
                        />
                    </>
                )}

              </li>
  )
}

HistoryItem.propTypes ={
    historyItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired
    }).isRequired,
    date: PropTypes.object.isRequired,
    Operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired
    }).isRequired,
    handleRestoreBtn: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default HistoryItem;

