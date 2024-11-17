import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

// Conditionally apply StrictMode in development
const AppWrapper = () => (process.env.NODE_ENV === 'development' ? (
  <React.StrictMode>
    <App />
  </React.StrictMode>
) : (
  <App />
));

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <AppWrapper />);
} else {
  const root = createRoot(rootElement);
  root.render(<AppWrapper />);
}
