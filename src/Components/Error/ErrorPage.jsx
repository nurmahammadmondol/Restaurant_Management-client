import Lottie from 'lottie-react';
import React from 'react';

import { Link } from 'react-router-dom';
import ErrorPageLottie from '../../assets/Lottie/Animation - 1736655711563.json';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="h-full  w-11/12 md:w-8/12 lg:w-6/12 mx-auto  flex flex-col items-center justify-center">
        <div className="w-11/12 md:w-9/12 mx-auto">
          <Lottie animationData={ErrorPageLottie}></Lottie>
        </div>
        <Link to="/">
          <button className="btn btn-outline">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
