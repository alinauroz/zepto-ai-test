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
  selected,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${className + (selected ? 'selected' : '')}`}
      style={style}
      disabled={disabled}
      data-testid="app-button"
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  selected: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  className: '',
  style: {},
  disabled: false,
  value: '',
  selected: false,
};

export default Button;
