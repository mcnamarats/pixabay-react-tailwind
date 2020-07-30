import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { SearchProvider } from './context/SearchProvider';
import './assets/css/main.css';

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
