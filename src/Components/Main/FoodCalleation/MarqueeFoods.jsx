import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import FoodItem from './FoodItem';

const MarqueeFoods = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios(
      'https://restaurant-management-server-side-seven.vercel.app/AllFoods'
    ).then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="mt-20 md:mt-32 ">
      <h2 className="text-3xl lg:text-4xl font-bold text-center  bangers-regular-font">
        Our All <span className="text-green-500">Foods</span>
      </h2>

      <Marquee speed={50} pauseOnHover={true} className="space-x-10">
        <div className="flex gap-10 py-10">
          {Data?.map(food => (
            <FoodItem key={food._id} food={food}></FoodItem>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeFoods;
