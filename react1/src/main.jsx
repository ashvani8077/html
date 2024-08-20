import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  App , {App2, Data}from './App.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <App2/>
    <Data/>
  </StrictMode>,
)
