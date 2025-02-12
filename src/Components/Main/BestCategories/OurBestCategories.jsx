import React, { useContext } from 'react';
import { AuthContent } from '../../AuthProvider/AuthProvider';
import Burger from '../../../assets/Photo/chicken-burger.png';
import Pizza from '../../../assets/Photo/pizza.png';
import sandwich from '../../../assets/Photo/sandwich.png';
import sorma from '../../../assets/Photo/sorma.png';
import muffins from '../../../assets/Photo/muffins.png';
import friedChicken from '../../../assets/Photo/fried-chicken.png';
import { Link } from 'react-router-dom';

const OurBestCategories = () => {
  const { name } = useContext(AuthContent);

  return (
    <div className="w-11/12 mx-auto my-32">
      <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold bangers-regular-font">
        Our Best <span className="text-green-700">categories</span>
      </h4>

      <div className="w-11/12 md:w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-7 gap-7 lg:gap-5">
        <div className="border rounded-lg  h-[250px] md:col-span-2 lg:col-span-3 flex items-center justify-center p-5 bg-orange-100">
          <img className="h-full" src={Pizza} alt="" />
        </div>

        <div className="border rounded-lg h-[250px]  flex items-center justify-center p-5 bg-orange-100">
          <img className="h-full" src={Burger} alt="" />
        </div>

        <div className="border rounded-lg h-[250px]  lg:col-span-2  flex items-center justify-center p-5 bg-orange-100">
          <img className="h-full " src={sandwich} alt="" />
        </div>

        <div className="border rounded-lg h-[250px] md:col-span-2 lg:col-span-1  flex items-center justify-center p-5 bg-orange-100">
          <img className="h-full" src={friedChicken} alt="" />
        </div>

        <div className="border rounded-lg h-[250px] md:col-span-2  flex items-center justify-center p-5 bg-orange-100">
          <img className="h-full" src={sorma} alt="" />
        </div>

        <div className="border rounded-lg h-[250px]  lg:col-span-3  flex items-center justify-center p-5 bg-orange-100">
          <img className="h-full" src={muffins} alt="" />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/AllFoods">
          <button className="btn px-10 btn-outline text-orange-400 font-bold">
            See All Foods<i class="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurBestCategories;
