import React from 'react';
import uuid from 'react-uuid';
import './Viewer.css';

function Viewer({
  toView = [],
  data = [],
  tableStyle = {},
  widths = [],
  className = '',
}) {
  return (
    <table className={`table ${className}`} style={tableStyle}>
      <thead>
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

export default Viewer;
