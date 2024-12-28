import React from 'react';
import Marquee from 'react-fast-marquee';
import pizzaIcon from '../../assets/Photo/pizza-icon-5.png';
import burgerIcon from '../../assets/Photo/burgericon.png';
import friedChecken from '../../assets/Photo/651186.png';
import FrenchFries from '../../assets/Photo/French fries.png';

const MarquSlider = () => {
  return (
    <div>
      <div className="h-24 w-full bg-[#4b9f27] flex justify-around  items-center text-yellow-300  text-3xl md:text-4xl font-bold md:-rotate-6">
        <Marquee speed={40} direction="right">
          <p>THE TROPICAL ESCAPE</p>
          <img className="w-20 mx-10" src={pizzaIcon} alt="" />
          <p>FAST SHIPPING</p>
          <img className="w-12 mx-10" src={burgerIcon} alt="" />

          <p>30 MINUTES</p>
          <img className="w-14 mx-10" src={friedChecken} alt="" />
          <p>SO HOT ORDERS</p>
          <img className="w-14 mx-10" src={FrenchFries} alt="" />
        </Marquee>
      </div>
      <div className="h-24 w-full bg-[#4b9f27] hidden md:flex justify-around items-center text-yellow-300 text-3xl md:text-4xl font-bold rotate-6 md:-mt-28 z-50 ">
        <Marquee speed={40}>
          <p>THE TROPICAL ESCAPE</p>
          <img className="w-20 mx-10" src={pizzaIcon} alt="" />
          <p>FAST SHIPPING</p>
          <img className="w-12 mx-10" src={burgerIcon} alt="" />

          <p>30 MINUTES</p>
          <img className="w-14 mx-10" src={friedChecken} alt="" />
          <p>SO HOT ORDERS</p>
          <img className="w-14 mx-10" src={FrenchFries} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default MarquSlider;
