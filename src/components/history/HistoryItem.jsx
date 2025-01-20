import React from 'react';
import Button from '../ui/Button';
import PropTypes from 'prop-types';

function HistoryItem({historyItem,handleRestoreBtn,disabled}) {
  return (
    <li key={historyItem.id}>
                <p>
                  Operations: {historyItem.inputs.a} {historyItem.Operation}{' '}
                  {historyItem.inputs.b}, Result = {historyItem.result}
                </p>
                <small>
                  {historyItem.date.toLocaleDateString()}{' '}
                  {historyItem.date.toLocaleTimeString()}
                </small>

                <Button 
                  text={'Restore'} 
                  onClick={()=>handleRestoreBtn(historyItem)}
                  disabled={disabled}
                />
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

