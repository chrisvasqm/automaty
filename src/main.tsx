import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  </React.StrictMode>,
)
