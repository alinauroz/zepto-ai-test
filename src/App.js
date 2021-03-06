import React from 'react';
import './res/colors.css';
import './App.css';

import Activity from './components/screens/Activity/Activity';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">Activity</h1>
      <Activity />
    </div>
  );
}

export default App;
