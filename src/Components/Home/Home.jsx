import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
