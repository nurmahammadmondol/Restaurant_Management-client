import React from 'react';
import Banner from '../Header/Banner';
import MarquSlider from '../Header/MarquSlider';
import OurBestCategories from '../Main/BestCategories/OurBestCategories';
import AchievementsAchieved from '../Main/Achievements/AchievementsAchieved';
import WhyChooseUs from '../Main/WhyChooseUs/WhyChooseUs';

const MainHome = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="">
        <MarquSlider></MarquSlider>
      </div>
      <div>
        <OurBestCategories></OurBestCategories>
      </div>
      <div>
        <AchievementsAchieved></AchievementsAchieved>
      </div>
      <div>
        <WhyChooseUs></WhyChooseUs>
      </div>
    </div>
  );
};

export default MainHome;
