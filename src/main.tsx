import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
// import { App } from './App';
import StudentLogin from "./login";
import Dashboard from "./client_dashboard";
import Instance from "./client_instance";
import StudentDashboard from "./student_dashboard"
import StudentInstance from "./student_instance"
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
// import './resets.css';
// setChonkyDefaults({ iconComponent: ChonkyIconFA });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/student/login" replace />,
    },
    {
      path:"/student/login",
      element:<StudentLogin />,
    },
    {
      path:"/student/dashboard",
      element:<StudentDashboard />,
    },
    {
      path:"/student/:id",
      element:<StudentInstance />,
    },
    // {
    //   path:"/",
    //   element:<Dashboard />,
    // },
    // {
    //   path:"/:id",
    //   element:<Instance />
    // },

      ])} />
  </StrictMode>,
);
