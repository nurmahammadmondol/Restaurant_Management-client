import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFoodCard from './SingleFoodCard';
import muffinLogo from '../../../assets/Photo/muffin_PNG24.png';
import burritoLogo from '../../../assets/Photo/food-burrito-stroke-9a4868.webp';
import taco from '../../../assets/Photo/file (2).png';

const AllFoods = () => {
  const All_Foods = useLoaderData();

  const [Data, setData] = useState(All_Foods);

  return (
    <div className="w-11/12 mx-auto my-20">
      <div>
        <h4>Banner</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-16">
        <div className="border rounded-xl p-5">
          <div className="">
            <h6 className="text-3xl bangers-regular-font mb-3 border-b-2">
              CATEGORIES
            </h6>

            <div>
              <ul className="space-y-4">
                <li>
                  <i class="fa-solid fa-burger mr-2"></i>Burger
                </li>
                <li>
                  <i class="fa-solid fa-pizza-slice mr-2"></i>Pizza
                </li>
                <li>
                  <i class="fa-solid fa-hotdog mr-2"></i>Sandwich
                </li>
                <li>
                  <i class="fa-solid fa-blender mr-2"></i>Milkshake
                </li>
                <li className="flex items-center gap-2">
                  <img className="w-4 h-4" src={muffinLogo} alt="" />
                  Muffin
                </li>
                <li className="flex items-center gap-2">
                  <img className="w-4 h-4" src={burritoLogo} alt="" />
                  Burrito
                </li>
                <li className="flex items-center gap-2">
                  <img className="w-4 h-4" src={taco} alt="" />
                  Taco
                </li>
                <li>
                  <i class="fa-solid fa-wine-glass mr-2"></i>Soft Drink
                </li>
                <li>
                  <i class="fa-solid fa-wand-magic-sparkles mr-2"></i>Specials
                </li>
              </ul>
            </div>

            <h6 className="text-3xl bangers-regular-font mt-10 md:mt-16 mb-3 border-b-2">
              Filter by
            </h6>
            <div className="flex items-center gap-2">
              <button className="btn btn-circle">M</button>
              <button className="btn btn-circle">L</button>
              <button className="btn btn-circle">XL</button>
              <button className="btn btn-circle">XXL</button>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Data.map(food => (
              <SingleFoodCard key={food._id} food={food}></SingleFoodCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
