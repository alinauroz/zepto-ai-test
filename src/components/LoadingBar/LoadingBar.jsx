import React from 'react';
import PropTypes from 'prop-types';
import './LoadingBar.css';

/**
 * renders a loading animation
 * @component
 * @example
 * const title="Loading..."
 * return (<LoadingBar title={title} />)
 */

function LoadingBar({ title }) {
  return (
    <div>
      <p className="loading-title">{title}</p>
      <div className="loadbar-container">
        <div className="loadbar" />
      </div>
    </div>
  );
}

LoadingBar.propTypes = {
  title: PropTypes.string,
};

LoadingBar.defaultProps = {
  title: '',
};

export default LoadingBar;
