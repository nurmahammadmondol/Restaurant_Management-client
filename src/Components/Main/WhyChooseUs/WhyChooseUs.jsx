import React from 'react';
import FastFoodBoard from '../../../assets/Photo/fast-food-board-with-hamburger.webp';
import IconOne from '../../../assets/Photo/pizza-icon-5.png';
import IconThere from '../../../assets/Photo/file2.png';
import IconTwo from '../../../assets/Photo/738079.png';

const WhyChooseUs = () => {
  return (
    <div className="md:flex gap-5 items-center h-full md:h-[500px] bg-[#fdeddf] my-20 p-10">
      <div className="w-full md:w-1/2 flex justify-center items-center ">
        <img className="h-[420px]" src={FastFoodBoard} alt="" />
      </div>
      <div className="w-full md:w-1/2 space-y-7">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bangers-regular-font">
          Why choose <span className="text-green-700"> us</span>
        </h3>
        <p className="text-sm">
          The mouth-watering aroma of sizzling burgers now fills the streets of
          Birmingham thanks to the passionate pursuit of three brothers
        </p>

        <div className="flex gap-3 md:gap-5 font-bold bangers-regular-font">
          <div className=" w-40">
            <img className="w-20" src={IconOne} alt="" />
            <small>A new look on the right food!</small>
          </div>
          <div className=" w-40 ">
            <img className="w-20" src={IconTwo} alt="" />
            <small className="">the use of natural best quality products</small>
          </div>
          <div className=" w-40">
            <img className="w-20" src={IconThere} alt="" />
            <small>fastest on your door step</small>
          </div>
        </div>

        <button className="btn px-10 bangers-regular-font  bg-orange-400 text-white text-lg font-bold border-b-4 border-r-4 border-black">
          Order Now <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
