import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './router/Router.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
