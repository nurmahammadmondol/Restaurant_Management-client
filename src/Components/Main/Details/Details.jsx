import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const LoaderDataDetails = useLoaderData();
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
  } = LoaderDataDetails;

  return (
    <div className="w-11/12 md:w-9/12 mx-auto my-20">
      <h4 className="text-2xl  mb-5 bangers-regular-font border-b pb-1">
        Details <i class="fa-solid fa-arrow-right "></i>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full md:h-[500px]">
        <div className="w-full h-full   rounded-2xl p-5 md:p-10">
          <img src={FoodImage} alt="" />
        </div>
        <div className="w-full h-full   rounded-2xl p-3 md:p-10 space-y-3 py-5">
          <h3 className="text-2xl md:text-4xl mb-5 bangers-regular-font">
            {FoodName}
          </h3>
          <div className="flex items-center  gap-4 border-b pb-1">
            <small>Reviews :</small>
            <div className="rating rating-xs">
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

          <p>
            The mouth-watering aroma of sizzling burgers now fills the streets
            of Birmingham thanks to the passionate pursuit of three brothers
          </p>
          <p className=" bangers-regular-font flex items-center gap-5">
            <span className="text-red-500 font-bold  text-xl ">
              $ {Price - 50}
            </span>

            <del className="text-gray-500 ">$ {Price}</del>
          </p>
          <ul className="text-sm space-y-1">
            <li>
              <i class="fa-brands fa-slack mr-2"></i>Free global shipping on all
              orders
            </li>
            <li>
              <i class="fa-brands fa-slack mr-2"></i>30 days easy returns if you
              change your mind
            </li>
            <li>
              <i class="fa-brands fa-slack mr-2"></i>Order before noon for same
              day dispatch
            </li>
          </ul>

          <div className="flex items-center  gap-2 md:gap-3 py-5">
            <h6 className="text-xl  bangers-regular-font">Quantity</h6>
            <div className="border rounded-lg px-5 py-2 flex justify-between items-center gap-4">
              <button>-</button> 1 <button>+</button>
            </div>
            <button className="btn bg-orange-400 text-white flex items-center gap-2 uppercase text-xs font-bold">
              <i class="fa-solid fa-cart-shopping"></i>Add To Card
            </button>
            <button className="btn bg-orange-50 flex items-center gap-2 uppercase text-orange-400 font-bold">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>

          <ul className="text-sm space-y-1">
            <li>
              <span className="font-bold">SKU : </span>
              Aerodynamic-small1103-hat-68579029
            </li>
            <li>
              <span className="font-bold">Categories :</span> Burrito, Salads
            </li>
            <li>
              <span className="font-bold">Tags :</span> fast food, good meal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
