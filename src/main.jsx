import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './styles/global.css'
import './styles/mobile-overrides.css'

// Disable automatic browser scroll restoration so new pages always open from the header
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Seamlessly support both root domain (/) and subfolder (/sociapareact)
const getBasename = () => {
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/sociapareact')) {
    return '/sociapareact';
  }
  return '';
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={getBasename()}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
