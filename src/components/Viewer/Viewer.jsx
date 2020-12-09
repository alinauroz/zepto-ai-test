import React from 'react';
import uuid from 'react-uuid';
import './Viewer.css';

function Viewer({
  toView = [],
  data = [],
  tableStyle = {},
}) {
  return (
    <table className="table" style={tableStyle}>
      <thead>
        {
            toView.map((heading) => <th key={uuid()}>{heading.value}</th>)
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
