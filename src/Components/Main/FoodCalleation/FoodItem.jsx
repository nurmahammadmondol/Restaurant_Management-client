import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const FoodItem = ({ food }) => {
  const { _id, FoodName, Price, FoodImage } = food;

  return (
    <motion.div
      className="card bg-orange-50 w-full md:w-[350px] shadow-xl p-5"
      data-aos="zoom-in-right"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ stiffness: 400, damping: 10 }}
    >
      <figure className="">
        <img
          src={FoodImage}
          alt="Food Image"
          className="flex justify-center items-center text-center w-full h-[250px]  "
        />
      </figure>
      <div className="space-y-4 mt-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl bangers-regular-font">{FoodName}</h2>
          <span className="text-red-500">
            <i class="fa-regular fa-heart"></i>
          </span>
        </div>
        <div>
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div>
          <small>
            Pepper Mayo Cruncher + Fries + Coleslaw + 1 Pc Chicken + Drink
          </small>
        </div>

        <div className="flex justify-between items-center mt-5">
          <div>
            {Price >= 300 ? (
              <div className=" bangers-regular-font flex items-center gap-5">
                <span className="text-red-500 font-bold  text-xl">
                  $ {Price - 50}
                </span>

                <del className="text-gray-500 ">$ {Price}</del>
              </div>
            ) : (
              <div>
                <span className="text-red-500 font-bold items-center  bangers-regular-font  text-xl">
                  $ {Price}
                </span>
              </div>
            )}
          </div>
          <Link to={`/Details/${_id}`}>
            <button className="btn btn-sm btn-neutral">
              <span className="text-xs">Details </span>
              <i class="fa-solid fa-circle-info"></i>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodItem;
