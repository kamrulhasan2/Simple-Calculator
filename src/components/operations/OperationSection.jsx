import React from 'react';
import Button from '../ui/Button';
import shortid from 'shortid';

function OperationSection({handelArithmeticOps,handleClearOps,customStyle}) {

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

export default OperationSection;