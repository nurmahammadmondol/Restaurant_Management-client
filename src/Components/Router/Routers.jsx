import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import MainHome from '../MainRoot/MainHome';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <h3>Error Page 404</h3>,
    children: [
      {
        path: '/',
        element: <MainHome></MainHome>,
      },
    ],
  },
]);

export default Routers;
