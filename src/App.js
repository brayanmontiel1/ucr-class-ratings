// src/App.js

import React from 'react';
import Search from './components/Search';
import initialDetails from './data/class_database';

function App() {
  return (
    <div className="tc bg-near-white ma0 pa4 min-vh-100">
      <Search details={initialDetails}/>
    </div>
  );
}


export default App;