// Vite automatically loads .env files
// Environment variables must be prefixed with VITE_ to be exposed to the client
// Access via import.meta.env.VITE_*

export const env = {
  // API URL (if needed)
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',

  // Mode
  MODE: import.meta.env.MODE || 'development',
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
} as const;
