import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "151930659692-45vnrt80f7r9nlr3bun4qe0p9pae1jim.apps.googleusercontent.com"}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);