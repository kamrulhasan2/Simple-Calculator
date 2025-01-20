import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';


function HistorySection({histories,restoredHistory,handleRestoreBtn}) {
  return (
    <div>
        <p style={{fontSize:'0.9rem',fontWeight:'bold',margin:'0.6rem'}}>History</p>
        {histories.length === 0 ? (
        <p>
            <small>There is no history</small>
        </p>
        ) : (
        <ul>
            {histories.map((historyItem) => (
            //history item
            <HistoryItem 
                historyItem={historyItem} 
                handleRestoreBtn={handleRestoreBtn}
                disabled={restoredHistory !== null && restoredHistory === historyItem.id} 
            />
            ))}
        </ul>
        )}
  </div>
  )
}

HistorySection.propTypes ={
    histories: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ).isRequired,
    restoredHistory : PropTypes.number.isRequired,
    handleRestoreBtn : PropTypes.func.isRequired
}

export default HistorySection;