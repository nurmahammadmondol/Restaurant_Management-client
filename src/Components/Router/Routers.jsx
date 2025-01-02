import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import MainHome from '../MainRoot/MainHome';
import Login from '../Sign_In_Out/Login';
import Registration from '../Sign_In_Out/Registration';
import AddFood from '../Main/AddFood/AddFood';
import MyFoods from '../Main/MyFoods/MyFoods';
import MyOrders from '../Main/MyOrders/MyOrders';
import AllFoods from '../Main/AllFoods/AllFoods';
import Gallery from '../Main/Gallery/Gallery';
import Details from '../Main/Details/Details';

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
      {
        path: '/AllFoods',
        element: <AllFoods></AllFoods>,
        loader: () => fetch('http://localhost:3000/AllFoods'),
      },
      {
        path: '/Gallery',
        element: <Gallery></Gallery>,
      },

      {
        path: '/AddFood',
        element: <AddFood></AddFood>,
      },

      {
        path: '/MyFoods',
        element: <MyFoods></MyFoods>,
      },
      {
        path: '/MyOrders',
        element: <MyOrders></MyOrders>,
      },
      {
        path: '/Details/:id',
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/AllFoods/${params.id}`),
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },
      {
        path: '/Registration',
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default Routers;
