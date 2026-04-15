import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import app from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <app />
    </BrowserRouter>
  </StrictMode>,
)
