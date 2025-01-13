import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
import ContactUs from '../Main/ContactUs/ContactUs';
import AboutUs from '../Main/AboutUs/AboutUs';
import UpdateFood from '../Main/UpdateFood/UpdateFood';
import PrivetRoot from '../../PrivetRoot/PrivetRoot';
import ErrorPage from '../Error/ErrorPage';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <MainHome></MainHome>,
      },
      {
        path: '/AllFoods',
        element: <AllFoods></AllFoods>,
        loader: () =>
          fetch(
            'https://restaurant-management-server-side-seven.vercel.app/AllFoods'
          ),
      },
      {
        path: '/Gallery',
        element: <Gallery></Gallery>,
      },

      {
        path: '/AddFood',
        element: (
          <PrivetRoot>
            <AddFood></AddFood>
          </PrivetRoot>
        ),
      },
      {
        path: '/UpdateFood/:id',
        element: (
          <PrivetRoot>
            <UpdateFood></UpdateFood>
          </PrivetRoot>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-side-seven.vercel.app/AllFoods/${params.id}`
          ),
      },
      {
        path: '/MyFoods',
        element: (
          <PrivetRoot>
            <MyFoods></MyFoods>
          </PrivetRoot>
        ),
        loader: () =>
          fetch(
            'https://restaurant-management-server-side-seven.vercel.app/AllFoods'
          ),
      },
      {
        path: '/MyOrders',
        element: (
          <PrivetRoot>
            <MyOrders></MyOrders>
          </PrivetRoot>
        ),
        loader: () =>
          fetch(
            'https://restaurant-management-server-side-seven.vercel.app/OrderFoods'
          ),
      },
      {
        path: '/Details/:id',
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-side-seven.vercel.app/AllFoods/${params.id}`
          ),
      },
      {
        path: '/AboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/ContactUs',
        element: <ContactUs></ContactUs>,
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
