import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Bootstrap da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode ajuda no ambiente de desenvolvimento
  <React.StrictMode>
    <App />
  </React.StrictMode>
);