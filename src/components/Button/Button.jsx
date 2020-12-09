import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  value,
  onClick,
  style,
  disabled,
  className,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${className}`}
      style={style}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

Button.propType = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape(PropTypes.any),
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: null,
  className: '',
  style: {},
  disables: false,
};

export default Button;
