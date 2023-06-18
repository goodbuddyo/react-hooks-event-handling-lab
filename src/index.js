import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';
import AppTest from './components/AppTest';

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
    <AppTest />
  </div>,
  document.getElementById('root')
);
