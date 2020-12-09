import React from 'react';
import './res/colors.css';
import './App.css';
import Viewer from './components/Viewer/Viewer';
import useRequest from './hooks/useRequest';

function App() {
  const { isLoading, response } = useRequest({ route: 'test/people', query: { period: 'day' } });

  console.log(response);

  return (
    <div style={{ width: '95%', marginLeft: '2.5%' }}>
      Zepto Ai Test
      <br />
      <br />
      <Viewer
        toView={[
          { value: 'Client', key: 'client' },
          { value: 'Matter', key: 'matter' },
          { value: 'Description', key: 'description' },
          { value: 'Type', key: 'type' },
          { value: 'Time', key: 'time' },
        ]}
        data={isLoading ? [] : response.data.people}
      />
    </div>
  );
}

export default App;
