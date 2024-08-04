import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
