import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// Global styles
import './styles/fonts.css';
import './styles/theme.css';
import './styles/presentation.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
