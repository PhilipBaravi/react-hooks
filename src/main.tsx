import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const baseUrl = import.meta.env.BASE_URL || '/react-hooks/';
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/svg+xml';
link.href = `${baseUrl}hook.svg?v=1.1`;

document.head.appendChild(link);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
