import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// document.querySelector(".router"); // HTMLElement

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>Header</header>
    <App />
    <footer>Footer</footer>
  </StrictMode>,
);
