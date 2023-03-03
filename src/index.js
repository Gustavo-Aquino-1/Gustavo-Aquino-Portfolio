import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PortfolioProvider from './context/PortfolioProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
    </BrowserRouter>
  </React.StrictMode>
);

