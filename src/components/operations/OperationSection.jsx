import React from 'react';
import Button from '../ui/Button';
import shortid from 'shortid';
import PropTypes from 'prop-types';

function OperationSection({handelArithmeticOps,handleClearOps}) {

    const operations = [
        {
            id: shortid.generate(),
            text: '+',
            onClick: ()=>handelArithmeticOps('+'),
            disabled: 'disabled'
        },
        {
            id: shortid.generate(),
            text: '-',
            onClick: ()=>handelArithmeticOps('-'),
        },
        {
            id: shortid.generate(),
            text: '*',
            onClick: ()=>handelArithmeticOps('*'),
        },
        {
            id: shortid.generate(),
            text: '/',
            onClick: ()=>handelArithmeticOps('/'),
        },
        {
            id: shortid.generate(),
            text: '%',
            onClick: ()=>handelArithmeticOps('%'),
        },
        {
            id: shortid.generate(),
            text: '**',
            onClick: ()=>handelArithmeticOps('**'),
        },
        {
            id: shortid.generate(),
            text: 'Clear',
            onClick: handleClearOps,
            customStyle: {backgroundColor:'red',color:'#fff'}
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