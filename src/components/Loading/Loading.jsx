import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

function Loading({ title }) {
  return (
    <div>
      <p className="loading-title">{title}</p>
      <div className="loadbar-container">
        <div className="loadbar" />
      </div>
    </div>
  );
}

Loading.propTypes = {
  title: PropTypes.string,
};

Loading.defaultProps = {
  title: '',
};

export default Loading;
