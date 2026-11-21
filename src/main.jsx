import React from 'react';
import ReactDOM from 'react-dom/client';

// Shared foundation first; individual slide styles follow from slide modules.
import './styles/tailwind.css';
import './styles/fonts.css';
import './styles/theme.css';
import './styles/presentation.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
