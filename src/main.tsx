import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { worker } from './mocks/browser.ts';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  // const { worker } = require('./mocks/browser');
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
