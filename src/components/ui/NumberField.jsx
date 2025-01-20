import React from 'react'
import PropTypes from 'prop-types';

function NumberField({ name, value, onChange }) {

    const style = {
        padding: '0.25rem',
        borderRadius: '0.1rem',
        border: '1px solid gray',
        background: '#fff',
        outline: 'none',
    };

    return (
        <input
            type="number"
            name={name}
            value={value}
            onChange={onChange}
            style={style}
        />
    )
}

NumberField.propTypes ={
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default NumberField;