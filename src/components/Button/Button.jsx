import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button component renders a button. Default styles can be overridden using className and
 * style props.
 *
 * @component
 * @example
 *
 * const value = "Click Me"
 * const onClick = () => alert('Hi ..')
 * const style = {}
 * const disbaled = false
 * const className = ''
 *
 * return (
 *  <Button
 *    value = {value}
 *    onClick = {onClick}
 *    style = {style}
 *    disabled = {disbaled}
 *    className = {className}
 *  />
 * )
 *
*/

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

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape(PropTypes.any),
  disabled: PropTypes.bool,
  value: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  className: '',
  style: {},
  disabled: false,
  value: '',
};

export default Button;
