import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Handle extension message listener to prevent "message channel closed" errors
if (typeof window !== 'undefined') {
  window.addEventListener('message', (event) => {
    // Handle any messages from extensions or content scripts
    if (event.source !== window) return;
    
    // Ensure a response is always sent if the listener returns true
    // This prevents the "message channel closed" error
    try {
      // Just acknowledge the message
      if (event.ports && event.ports.length > 0) {
        event.ports[0].postMessage({ received: true });
      }
    } catch (error) {
      console.error('Error handling extension message:', error);
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
