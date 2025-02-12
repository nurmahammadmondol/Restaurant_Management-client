import React from 'react';
import Banner from '../Header/Banner';
import MarquSlider from '../Header/MarquSlider';
import OurBestCategories from '../Main/BestCategories/OurBestCategories';
import AchievementsAchieved from '../Main/Achievements/AchievementsAchieved';
import WhyChooseUs from '../Main/WhyChooseUs/WhyChooseUs';
import BestSellingDishes from '../Main/BestSelling/BestSellingDishes';
import { Helmet } from 'react-helmet';
import MarqueeFoods from '../Main/FoodCalleation/MarqueeFoods';
import Offers from '../Main/Offers/Offers';

const MainHome = () => {
  return (
    <>
      <Helmet>
        <title>YumYum Bites | Restaurant</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <div className="">
          <MarquSlider></MarquSlider>
        </div>

        <div>
          <MarqueeFoods></MarqueeFoods>
        </div>

        <div>
          <OurBestCategories></OurBestCategories>
        </div>

        <div>
          <Offers></Offers>
        </div>

        <div className="my-20">
          <BestSellingDishes></BestSellingDishes>
        </div>

        <div>
          <WhyChooseUs></WhyChooseUs>
        </div>

        <div>
          <AchievementsAchieved></AchievementsAchieved>
        </div>
      </div>
    </>
  );
};

export default MainHome;
