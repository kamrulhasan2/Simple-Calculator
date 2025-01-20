import React from 'react';
import PropTypes from 'prop-types';
import NumberField from '../ui/NumberField';

function InputSection({inputs,inputStateHandeler}) {
  return (
     <div style={{
        width: '100%',
        padding: '0.5rem 1rem',
        backgroundColor: '#efefef',
        borderRadius: '0.10rem',
    }}>
            <h3 style={{
					fontFamily: 'Arial',
					textAlign: 'center',
					fontSize: '1.5rem',
					color: '#212121',
					margin: 0,
					marginBottom: '1rem',
				}}>Inputs</h3>
    
            <NumberField value={inputs.a} name='a' onChange={inputStateHandeler}  />
            <NumberField value={inputs.b} name='b' onChange={inputStateHandeler}  />
            
     </div>
  )
}

InputSection.propTypes = {
    inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired
    }).isRequired,
    inputStateHandeler: PropTypes.func.isRequired
}

export default InputSection;