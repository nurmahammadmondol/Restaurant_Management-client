import React, { useContext } from 'react';
import { AuthContent } from '../../AuthProvider/AuthProvider';
import Burger from '../../../assets/Photo/chicken-burger.png';
import Pizza from '../../../assets/Photo/pizza.png';
import sandwich from '../../../assets/Photo/sandwich.png';
import sorma from '../../../assets/Photo/sorma.png';

const OurBestCategories = () => {
  const { name } = useContext(AuthContent);

  return (
    <div className="w-11/12 mx-auto my-32">
      <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold bangers-regular-font">
        Our Best <span className="text-green-700">categories</span>
      </h4>

      <div className="grid grid-cols-3 md:grid-cols-6 mt-7 gap-5">
        <div className="border rounded-lg  h-[250px] col-span-2 md:col-span-3 flex items-center justify-center p-5 bg-gray-50">
          <img className="h-full" src={Pizza} alt="" />
        </div>

        <div className="border rounded-lg h-[250px]  flex items-center justify-center p-5 bg-gray-50">
          <img className="h-full" src={Burger} alt="" />
        </div>

        <div className="border rounded-lg h-[250px] md:col-span-2  flex items-center justify-center p-5 bg-gray-50">
          <img className="h-full " src={sandwich} alt="" />
        </div>

        <div className="border rounded-lg h-[250px] col-span-2 md:col-span-1  flex items-center justify-center p-5 bg-gray-50">
          <img className="h-full" src={sorma} alt="" />
        </div>

        <div className="border rounded-lg h-[250px] col-span-2 md:col-span-3  flex items-center justify-center p-5 bg-gray-50">
          <img className="h-full" src={Burger} alt="" />
        </div>

        <div className="border rounded-lg h-[250px] md:col-span-2  flex items-center justify-center p-5 bg-gray-50">
          <img className="h-full" src={Burger} alt="" />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="btn px-10 btn-outline text-orange-400 font-bold">
          All Foods<i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default OurBestCategories;
