import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TestProvider } from './contexts/TestContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <TestProvider>
      <App />
    </TestProvider>
  </React.StrictMode>,
)
