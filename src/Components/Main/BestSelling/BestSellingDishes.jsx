import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const BestSellingDishes = () => {
  const [BestSellingDishes, setBestSellingDishes] = useState([]); // Correct state initialization

  useEffect(() => {
    fetch(
      'https://restaurant-management-server-side-seven.vercel.app/OrderFoods'
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setBestSellingDishes(data);
      });
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-6 bangers-regular-font">
        Best Selling <span className="text-green-500">Dishes</span>
      </h2>
      <div className="relative w-11/12  mx-auto my-10 p-5 rounded-lg shadow-lg bg-slate-50">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={20} // Default space between images
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          breakpoints={{
            // when window width is >= 640px (small devices)
            640: {
              slidesPerView: 2, // 2 slides per view
              spaceBetween: 20, // space between images
            },
            // when window width is >= 768px (medium devices)
            768: {
              slidesPerView: 3, // 3 slides per view
              spaceBetween: 50, // space between images
            },
          }}
          className="w-full"
        >
          {BestSellingDishes.length > 0 ? (
            <>
              {BestSellingDishes.map((Dishes, index) => (
                <SwiperSlide
                  key={Dishes._id}
                  className={`w-[200px] bg-orange-300 border rounded-tl-3xl rounded-br-3xl  ${
                    index === 0 ? 'first-slide' : ''
                  } ${
                    index === BestSellingDishes.length - 1 ? 'last-slide' : ''
                  }`}
                >
                  <img
                    src={Dishes.FoodImage}
                    alt={Dishes.FoodName}
                    className="h-[400px] w-full object-cover"
                  />
                  <h4 className="m-1 text-sm font-bold">{Dishes.FoodName}</h4>
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              <SwiperSlide className="w-[250px] first-slide">
                <img
                  src="https://i.ibb.co.com/qrQLJxx/Pepperoni-Pizza-Beauty-1000x1000.webp"
                  alt="Dish 1"
                  className="h-[400px] w-full object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="w-[300px]">
                <img
                  src="https://i.ibb.co.com/JBJjkH8/https-prod-static9-net-au-media-Images-Kitchen-2011-09-22-11-35-classic-burger.jpg"
                  alt="Dish 2"
                  className="h-[400px] w-full object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="w-[300px]">
                <img
                  src="https://i.ibb.co.com/r2DHHRv/traditional-chicken-wings-912937-hero-01-6c1a003373a54538a732abc0005145d8.jpg"
                  alt="Dish 3"
                  className="h-[400px] w-full object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="w-[300px]">
                <img
                  src="https://i.ibb.co.com/KjF7qFV/loaded-nachos-banner.jpg"
                  alt="Dish 4"
                  className="h-[400px] w-full object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide className="w-[250px] last-slide">
                <img
                  src="https://i.ibb.co.com/jLnyY89/Screenshot-2024-07-18-155507.webp"
                  alt="Dish 5"
                  className="h-[400px] w-full object-cover rounded-lg"
                />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default BestSellingDishes;
