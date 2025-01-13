import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import FoodItem from './FoodItem';

const MarqueeFoods = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios('http://localhost:3000/AllFoods').then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="mt-36 ">
      <Marquee speed={50} pauseOnHover={true} className="space-x-10">
        <div className="flex gap-10 py-10">
          {Data.map(food => (
            <FoodItem key={food._id} food={food}></FoodItem>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeFoods;
