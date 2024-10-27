import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';

// Create a root for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Route path="/" element={<App />} />
      <Route path="/([a-zA-z])" element={<NotFound />} />
  </BrowserRouter>
);