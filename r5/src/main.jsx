import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Resume from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Resume />
  </StrictMode>
)