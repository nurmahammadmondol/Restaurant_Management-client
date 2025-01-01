import React from 'react';

const SingleFoodCard = ({ food }) => {
  const {
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
        <div className="w-3/4">
          <small>
            Pepper Mayo Cruncher + Fries + Coleslaw + 1 Pc Chicken + Drink
          </small>
        </div>

        <div className="flex justify-between items-center mt-5">
          <p className="text-red-500 font-extrabold  text-xl bangers-regular-font">
            ${Price}
          </p>
          <button className="btn btn-sm btn-neutral">
            <span className="text-xs">Buy Now</span>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCard;
