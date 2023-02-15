import React from 'react';
import TextBoxes from './Components/TextBoxes';
import TextMethod from './Components/TaxMethod'
import Dates from './Components/Dates';

import './App.css';

function App() {
  return (
    <div className="App">
      <Dates />
      <TextBoxes />
      <TextMethod />
    </div>
  );
}

export default App;