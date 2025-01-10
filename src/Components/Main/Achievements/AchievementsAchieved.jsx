import React from 'react';
import BG from '../../../assets/Photo/Bg-banner222.jpg';
import pizzaDe from '../../../assets/Photo/pizza-delivery.webp';

const AchievementsAchieved = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.7,
      }}
      className="h-full md:h-[230px] w-11/12 md:w-10/12 lg:w-9/12 mx-auto rounded-lg relative p-3 md:p-8 mt-44"
    >
      <div className="">
        <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 bangers-regular-font text-center">
          Achievements achieved
        </h3>
        <div className="mt-3 md:mt-5 ">
          <div className="flex gap-3 md:gap-5 text-white">
            <div className="">
              <div className="stat-figure"></div>
              <div className="">Total Likes</div>
              <div className="stat-value ">25.6K</div>
              <div className="">21% more than last month</div>
            </div>

            <div className="border-x-2 border-white px-5">
              <div className=""></div>
              <div className="">Page Views</div>
              <div className="stat-value ">2.6M</div>
              <div className="">21% more than last month</div>
            </div>

            <div className="">
              <div className=""></div>
              <div className="stat-value">86%</div>
              <div className="">Tasks done</div>
              <div className="">31 tasks remaining</div>
            </div>
          </div>
        </div>
        <div
          className="hidden md:flex absolute right-0 bottom-0"
          data-aos="zoom-in-up"
          data-aos-duration="3000"
        >
          <img src={pizzaDe} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AchievementsAchieved;
