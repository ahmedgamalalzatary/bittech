import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Project stylesheets (reused as-is from the original site, kept in original order)
import '../frontend-assets/css/colors.css'
import '../frontend-assets/css/style.css'
import '../frontend-assets/css/common.css'
import '../frontend-assets/css/custom-animations.css'
import '../frontend-assets/css/services-dropdown.css'
import '../frontend-assets/css/home.css'
import './inline-styles.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
