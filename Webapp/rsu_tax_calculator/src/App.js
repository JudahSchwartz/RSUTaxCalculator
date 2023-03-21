import React from 'react';
import TextBoxes from './Components/TextBoxes';
import TextMethod from './Components/TaxMethod';
import Dates from './Components/Dates';
import SubmitButton from './Components/SubmitButton';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



import './App.css';

function App() {
  return (
    <div className="App">
    <div className="input-group">
      <h1>RSU Calculator</h1>
      <Dates />
      <TextBoxes />
      <TextMethod />
      <SubmitButton />
    </div>
    </div>
  );
}

export default App;