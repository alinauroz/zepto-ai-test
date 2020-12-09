import React from 'react';
import './res/colors.css';
import './App.css';
import Viewer from './components/Viewer/Viewer';

function App() {
  return (
    <>
      Zepto Ai Test
      <Viewer
        toView={[
          { value: 'A', key: 'a' },
          { value: 'B', key: 'b' },
        ]}
        data={[
          { a: 'Ice', b: 'Snow' },
          { a: 'Cold', b: 'PCS' },
        ]}
      />
    </>
  );
}

export default App;
