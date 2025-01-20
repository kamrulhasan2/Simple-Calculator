import React from 'react';
import Button from '../ui/Button';
import shortid from 'shortid';
import PropTypes from 'prop-types';

function OperationSection({handelArithmeticOps,handleClearOps}) {

    const OperationBtnStyle ={
        backgroundColor:'#fff',
        color:'#999',
        fontWetight: 'bold',
        border:'1px solid #999',
        borderRadius: '0.3rem'
    }

    const operations = [
        {
            id: shortid.generate(),
            text: '+',
            onClick: ()=>handelArithmeticOps('+'),
            customStyle: OperationBtnStyle
        },
        {
            id: shortid.generate(),
            text: '-',
            onClick: ()=>handelArithmeticOps('-'),
            customStyle: OperationBtnStyle
        },
        {
            id: shortid.generate(),
            text: '*',
            onClick: ()=>handelArithmeticOps('*'),
            customStyle: OperationBtnStyle
        },
        {
            id: shortid.generate(),
            text: '/',
            onClick: ()=>handelArithmeticOps('/'),
            customStyle: OperationBtnStyle
        },
        {
            id: shortid.generate(),
            text: '%',
            onClick: ()=>handelArithmeticOps('%'),
            customStyle: OperationBtnStyle
        },
        {
            id: shortid.generate(),
            text: '**',
            onClick: ()=>handelArithmeticOps('**'),
            customStyle: OperationBtnStyle
        },
        {
            id: shortid.generate(),
            text: 'Clear',
            onClick: handleClearOps,
            customStyle: {...OperationBtnStyle,backgroundColor:'red',color:'#fff'}
        }

    ]

  return (
    <div>
        <h3>Operations</h3>

        {operations.map((ops)=>(
            <Button key={ops.id} {...ops} />
        ))}

      </div>
  )
}

OperationSection.propTypes = {
    handelArithmeticOps: PropTypes.func.isRequired,
    handleClearOps: PropTypes.func.isRequired
}

export default OperationSection;