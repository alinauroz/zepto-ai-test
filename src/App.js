import React from 'react';
import './App.css';
import useRequest from './hooks/useRequest';

function App() {
  const { isLoading, response } = useRequest({ });

  console.log(response);

  return (
    <>
      Zepto AI Test
      {isLoading}
    </>
  );
}

export default App;
