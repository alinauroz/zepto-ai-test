import React from 'react';
import Loading from './components/Loading/Loading';
import './res/colors.css';
import './App.css';

import Activity from './components/screens/Activity/Activity';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">Activity</h1>
      <Loading />
      <Activity />
    </div>
  );
}

export default App;
