import React from 'react'
import PropTypes from 'prop-types';

function Button({ text, onClick, disabled, customStyle }) {

    const disabledStyle = {
		backgroundColor: '#999',
		color: '#333',
		cursor: 'not-allowed',
	};

    const style ={
        padding: '0.5rem 1rem',
        margin: '0.15rem',
        backgroundColor: '#ddd',
        color: '#212121',
        borderRadius: '0.10rem',
        cursor: 'pointer',
        border: 'none',
        ...customStyle,
        ...(disabled && disabledStyle)
    }

    return (
        
            <button 
                onClick={onClick} 
                disabled={disabled} 
                style={style}
            >{text}</button>
        
    )
}

Button.propsTypes = {
    onClick: PropTypes.func.isRequired, 
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    customStyle: PropTypes.object
    
}

Button.defaultProps = {
    customStyle: {},
    disabled: false
}

export default Button;