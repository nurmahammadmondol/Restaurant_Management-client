import React from 'react';
import BG from '../../../assets/Photo/Bg-banner222.jpg';
import pizzaDe from '../../../assets/Photo/pizza-delivery.webp';
import CountUp from 'react-countup';

const AchievementsAchieved = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.7,
      }}
      className="h-full md:h-[230px] w-11/12  lg:w-9/12 mx-auto rounded-lg relative p-3 md:p-8 mt-44 mb-20"
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
              <div className="stat-value ">
                <CountUp
                  start={0}
                  end={25.6}
                  duration={7}
                  decimals={1}
                  suffix="k"
                  className="font-bold "
                />
              </div>
              <div className="text-xs md:text-lg">21% more than last month</div>
            </div>

            <div className="border-x-2 border-white px-5">
              <div className=""></div>
              <div className="">Page Views</div>
              <div className="stat-value ">
                <CountUp
                  start={0}
                  end={2.6}
                  duration={8}
                  decimals={1}
                  suffix="M"
                  className="font-bold "
                />
              </div>
              <div className="text-xs md:text-lg">21% more than last month</div>
            </div>

            <div className="">
              <div className=""></div>
              <div className="stat-value ">
                <CountUp
                  start={0}
                  end={86}
                  duration={7}
                  decimals={0}
                  suffix="%"
                  className="font-bold "
                />
              </div>
              <div className="">Tasks done</div>
              <div className="text-xs md:text-lg">31 tasks remaining</div>
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
