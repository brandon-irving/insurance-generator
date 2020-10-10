import React from 'react';
import { ContextStateProvider } from 'dynamic-context-provider'
import './App.css';
import GeicoTemplate from './Components/GeicoTemplate';

function App() {
  return (
    <div>
       <ContextStateProvider stateConfig={{}}>
        <GeicoTemplate />
      </ContextStateProvider>
    </div>
  );
}

export default App;
