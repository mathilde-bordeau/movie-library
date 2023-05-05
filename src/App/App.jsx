import React from 'react';
import './App.scss';

import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Je vais tout déchiiiiiiiiiiiiiirer !</h1>
    </div>
  );
}

export default React.memo(App);
