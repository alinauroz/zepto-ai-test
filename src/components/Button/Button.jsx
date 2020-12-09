import React from 'react';
import './Button.css';

function Button({
  value = '',
  onClick = null,
  style = {},
  disabled = false,
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={onClick || null}
      className={className}
      style={style}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Button;
