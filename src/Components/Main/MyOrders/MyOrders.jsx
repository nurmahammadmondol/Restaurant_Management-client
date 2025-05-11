import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContent } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const MyOrders = () => {
  const { User } = useContext(AuthContent);
  const navigate = useNavigate();
  const LoadOrderData = useLoaderData();
  const [OrderData, setOrderData] = useState(LoadOrderData);
  const [OrderUserFood, setOrderUserFood] = useState([]);

  useEffect(() => {
    const UserOrder = OrderData.filter(
      orderFood => orderFood.OrderUserEmail == User.email
    );
    setOrderUserFood(UserOrder);
  }, []);

  const handleDeleteFood = ID => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete the food ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#eba75f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/OrderFoods/${ID}`)
          .then(() => {
            console.log('success delete');
            const FilterRemoveFoods = OrderUserFood.filter(
              food => food._id != ID
            );
            setOrderUserFood(FilterRemoveFoods);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your food has been successfully deleted.',
              icon: 'success',
              confirmButtonColor: '#eba75f',
            }).then(() => {
              navigate(0);
            });
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    });
  };

  const tableVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 }, // প্রতিটি row এর জন্য delay বাড়বে
    }),
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-16">
      <Helmet>
        <title>YumYum Bites | My Orders</title>
      </Helmet>

      <h4 className="md:text-3xl mb-5  text-center bangers-regular-font  underline">
        My Orders Food
      </h4>

      {OrderData?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-bold text-lg">
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Food Owner</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {OrderUserFood.map((myOrder, inx) => (
                <motion.tr
                  key={myOrder._id}
                  custom={inx}
                  initial="hidden"
                  animate="visible"
                  variants={tableVariants}
                >
                  <td>
                    <img
                      className="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 border rounded-full"
                      src={myOrder.FoodImage}
                      alt=""
                    />
                  </td>
                  <td>{myOrder.FoodName}</td>
                  <td>{myOrder.Price}</td>
                  <td>{myOrder.quantity}</td>
                  <td>{myOrder.Date}</td>
                  <td className="text-xs">{myOrder.FoodOwnerName}</td>

                  <td>
                    <button
                      onClick={() => handleDeleteFood(myOrder._id)}
                      className="btn  text-orange-500 text-lg bg-orange-50"
                    >
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="min-h-screen w-11/12 mx-auto flex flex-col justify-center items-center">
          <small className="text-center mb-1">Loading...</small>
          <progress className="progress w-56"></progress>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
