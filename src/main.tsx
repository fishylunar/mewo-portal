/**
 * @file main.ts
 * @type generic
 * @project Mewo Portal
 * @description Renders the App view.
 * @author fishylunar
 * @date 2/16/25.
 * @version 1.0.1
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
