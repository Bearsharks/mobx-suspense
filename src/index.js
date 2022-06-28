import App from './App';
import React from 'react';
import {createRoot} from 'react-dom/client';
import RootContext from './RootContext';
import RootStore from './store/RootStore';



createRoot(document.getElementById('app')).render(
    <RootContext.Provider value={new RootStore()}>
      <App />
    </RootContext.Provider>
);