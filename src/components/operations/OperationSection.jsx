import React from 'react'
import Button from '../ui/Button'

function OperationSection({handelArithmeticOps,handleClearOps}) {
  return (
    <div>
        <h3>Operations</h3>

        <Button text={'+'} onClick={()=>handelArithmeticOps('+')} disabled={true}/>
        <Button text={'-'} onClick={()=>handelArithmeticOps('-')} />
        <Button text={'*'} onClick={()=>handelArithmeticOps('*')}/>
        <Button text={'/'} onClick={()=>handelArithmeticOps('/')}/>
        <Button text={'%'} onClick={()=>handelArithmeticOps('%')}/>
        <Button text={'Clear'} onClick={handleClearOps} customStyle={{backgroundColor: 'red',color: '#fff'}}/>
      </div>
  )
}

export default OperationSection;