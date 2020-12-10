import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import './Viewer.css';

/**
 * Viewer renders data array as a table. Pass an array of data with toView array of
 * objects. Custom styles and className are also supported. Default styles can be
 * overriden either using tableStyles prop or className prop.
 *
 * @component
 * @example
 *
 * const toView = [{value: "Name", key: "name"}, {value: "Age", key: "age"}]
 * const data = [{name: 'Ali', age: 22}]
 * const tableStyle = {}
 * const className = "people-viewer"
 * const widths = [40, 60]
 *
 * return (
 *  <Viewer
 *   toView = {toView}
 *   data = {data}
 *   tableStyle = {tableStyle}
 *   className = {className}
 *   width = {widths}
 *  />
 * )
 */

function Viewer({
  toView,
  data,
  tableStyle,
  className,
  widths,
}) {
  return (
    <table className={`table ${className}`} style={tableStyle}>
      <thead data-testid="table-heading">
        <tr>
          {
              toView.map((heading, index) => (
                <th
                  style={widths[index] ? { width: `${widths[index]}%` } : {}}
                  key={uuid()}
                >
                  {heading.value}
                </th>
              ))
          }
        </tr>
      </thead>
      <tbody>
        {
            data.map((row) => (
              <tr key={uuid()}>
                {
                    toView.map((heading) => <td key={uuid()}>{row[heading.key]}</td>)
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

Viewer.propTypes = {
  toView: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    key: PropTypes.string,
  })),
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  tableStyle: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  widths: PropTypes.arrayOf(PropTypes.number),
};

Viewer.defaultProps = {
  toView: [],
  data: [],
  tableStyle: {},
  className: '',
  widths: [],
};

export default Viewer;
