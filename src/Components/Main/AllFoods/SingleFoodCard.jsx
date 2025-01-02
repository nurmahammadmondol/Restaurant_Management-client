import React from 'react';
import { Link } from 'react-router-dom';

const SingleFoodCard = ({ food }) => {
  const {
    _id,
    UserName,
    UserEmail,
    FoodName,
    Price,
    Quantity,
    FoodImage,
    FoodCategory,
    Description,
  } = food;

  return (
    <div className="card bg-orange-50 w-full shadow-xl p-7">
      <figure className="">
        <img
          src={FoodImage}
          alt="Food Image"
          className="flex justify-center items-center text-center w-full h-[250px] border p-5"
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
        <div className="lg:w-3/4">
          <small>
            Pepper Mayo Cruncher + Fries + Coleslaw + 1 Pc Chicken + Drink
          </small>
        </div>

        <div className="flex justify-between items-center mt-5">
          <p className=" bangers-regular-font flex items-center gap-5">
            <span className="text-red-500 font-bold  text-xl ">
              $ {Price - 50}
            </span>

            <del className="text-gray-500 ">$ {Price}</del>
          </p>
          <Link to={`/Details/${_id}`}>
            <button className="btn btn-sm btn-neutral">
              <span className="text-xs">Details </span>
              <i class="fa-solid fa-circle-info"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCard;
