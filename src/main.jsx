import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from './Components/Context/DarkmodeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
    </BrowserRouter>
  
)
