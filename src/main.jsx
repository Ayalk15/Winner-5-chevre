import React from 'react'
import ReactDOM from 'react-dom/client'
import app from './app.jsx'
import './index.css'

// קוד מיוחד שמקפיץ שגיאות ישירות על המסך הלבן במובייל
window.onerror = function(message, source, lineno, colno, error) {
  const errorDiv = document.createElement('div');
  errorDiv.style.color = 'red';
  errorDiv.style.background = 'white';
  errorDiv.style.padding = '20px';
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '0';
  errorDiv.style.left = '0';
  errorDiv.style.zIndex = '9999';
  errorDiv.style.direction = 'ltr';
  errorDiv.innerHTML = `<h3>Render Error:</h3><p>${message}</p><p>Line: ${lineno}</p>`;
  document.body.appendChild(errorDiv);
  return false;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
