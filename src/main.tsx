import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router.tsx'
import 'sass/layout.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
