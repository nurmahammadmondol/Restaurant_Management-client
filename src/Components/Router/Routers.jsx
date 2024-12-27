import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <h3>Error Page 404</h3>,
  },
]);

export default Routers;
