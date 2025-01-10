import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContent } from '../Components/AuthProvider/AuthProvider';

const PrivetRoot = ({ children }) => {
  const { User, loading } = useContext(AuthContent);
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <small className="text-center mb-1">Loading...</small>
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (User) {
    return children;
  }

  return <Navigate to="/Login"></Navigate>;
};

export default PrivetRoot;

// const Privet = ({ children }) => {
//   const { User, loading } = useContext(AuthContent);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (User) {
//     return children;
//   }

//   return <Navigate to="/"></Navigate>;
// };

// export default Privet;
