import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { App } from './App';
import Dashboard from "./client_dashboard";
import Instance from "./client_instance";
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
// import './resets.css';
setChonkyDefaults({ iconComponent: ChonkyIconFA });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter([
    {
      path:"/",
      element:<Dashboard />,
    },
    {
      path:"/:id",
      element:<Instance />
    },
    {
    },

      ])} />
  </StrictMode>,
);
