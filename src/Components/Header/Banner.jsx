import React from 'react';
import { motion } from 'motion/react';

import BannerPizza from '../../assets/Photo/veggie-pizza-banner.png';
import BurgerImage from '../../assets/Photo/chicken-burger.png';
import pizzaImage from '../../assets/Photo/46-pizza-png-image.png';
import muffinsImage from '../../assets/Photo/muffins.png';
import sandwichImage from '../../assets/Photo/sandwich.png';
import FriedChickenImage from '../../assets/Photo/fried-chicken.png';
import sormaImage from '../../assets/Photo/sorma.png';

const Banner = () => {
  return (
    <div className="h-full md:h-[600px] bg-[#E69138] p-5 text-white">
      <h2 className="text-center text-4xl md:text-6xl lg:text-8xl font-bold mt-5 bangers-regular-font">
        Premium Quality Restaurant
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 mx-5 md:mx-10 md:items-center space-y-5 md:space-y-0">
        <div className="">
          <p>
            Welcome to YumYum Bites, where flavor meets quality! Enjoy freshly
            prepared pizzas, juicy burgers, and delicious meals crafted with
            love. Join us for an unforgettable dining experience, where every
            bite delights!
          </p>
        </div>
        <div className="col-span-2 z-10">
          <img className="w-full md:h-[500px]" src={BannerPizza} alt="" />
        </div>

        <div className="hidden  md:grid grid-cols-3 gap-5 ">
          <motion.div
            className="w-20 md:w-24 p-1 bg-white rounded-full"
            data-aos="zoom-in"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ stiffness: 200, damping: 10 }}
          >
            <img src={BurgerImage} alt="" />
          </motion.div>

          <motion.div
            className="w-20 md:w-24 p-1 bg-white rounded-full "
            data-aos="zoom-in"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ stiffness: 200, damping: 10 }}
          >
            <img src={pizzaImage} alt="" />
          </motion.div>

          <motion.div
            className="w-20 md:w-24 p-1 bg-white rounded-full"
            data-aos="zoom-in"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ stiffness: 200, damping: 10 }}
          >
            <img src={muffinsImage} alt="" />
          </motion.div>

          <motion.div
            className="w-20 md:w-24 p-1 bg-white rounded-full"
            data-aos="zoom-in"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ stiffness: 200, damping: 10 }}
          >
            <img src={sandwichImage} alt="" />
          </motion.div>

          <motion.div
            className="w-20 md:w-24 p-1 bg-white rounded-full"
            data-aos="zoom-in"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ stiffness: 200, damping: 10 }}
          >
            <img src={FriedChickenImage} alt="" />
          </motion.div>

          <motion.div
            className="w-20 md:w-24 p-1 bg-white rounded-full"
            data-aos="zoom-in"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ stiffness: 200, damping: 10 }}
          >
            <img src={sormaImage} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
