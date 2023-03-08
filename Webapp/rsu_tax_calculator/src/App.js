import React from 'react';
import TextBoxes from './Components/TextBoxes';
import TextMethod from './Components/TaxMethod';
import Dates from './Components/Dates';
import SubmitButton from './Components/SubmitButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>RSU Calculator</h1>
      <Dates />
      <TextBoxes />
      <TextMethod />
      <SubmitButton />
    </div>
  );
}

export default App;