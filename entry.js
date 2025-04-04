// Simple entry point that avoids TypeScript imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './src/index.css';

// Use older React 17 style rendering for maximum compatibility
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
); 