import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'purehtml', // app name registered
    entry: '//localhost:8080',
    container: '#root',
    activeRule: '/app-vanilla',
  },
  {
    name: 'vue3App',
    entry: '//localhost:8081',
    container: '#root',
    activeRule: '/vue3app',
  }
]);

start();