import React from 'react';
import { FaPizzaSlice, FaCoffee, FaBirthdayCake, FaGift } from 'react-icons/fa';

import Buy1Get1 from '../../../assets/Photo/Buy_one_Get_one_Free.jpg';
import HappyHour from '../../../assets/Photo/happy our.jpg';
import BirthdaySpecial from '../../../assets/Photo/free-birthday-food-phpNT6aZf.webp';
import FestivalDiscount from '../../../assets/Photo/pngtree-festival-offer.png';
import { Link } from 'react-router-dom';

const offers = [
  {
    image: Buy1Get1,
    icon: <FaPizzaSlice size={20} />,
    title: 'Buy 1 Get 1 Free',
    description: 'Order any large pizza and get another absolutely free!',
    buttonText: 'Order Now',
  },
  {
    image: HappyHour,
    icon: <FaCoffee size={20} />,
    title: 'Happy Hour Deals',
    description: 'Enjoy 10% off on all beverages from 1 PM to 5 PM!',
    buttonText: 'View Menu',
  },
  {
    image: BirthdaySpecial,
    icon: <FaBirthdayCake size={20} />,
    title: 'Birthday Special',
    description: 'Get a free dessert on your birthday! Just show your ID.',
    buttonText: 'Claim Now',
  },
  {
    image: FestivalDiscount,
    icon: <FaGift size={20} />,
    title: 'Festival Discount',
    description: 'Enjoy exclusive discounts on special occasions!',
    buttonText: 'Explore',
  },
];

const Offers = () => {
  return (
    <div className="w-11/12 mx-auto p-6 md:p-10 bg-gray-50 ">
      <h4 className="text-center text-2xl md:text-4xl font-bold bangers-regular-font mb-5">
        Special <span className="text-green-500">Offers</span>
      </h4>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center space-y-4 border border-gray-200"
          >
            <img
              className="h-[170px] w-full border rounded-md"
              src={offer.image}
              alt=""
            />

            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span>{offer.icon}</span>
              {offer.title}
            </h3>
            <p className="text-gray-400">{offer.description}</p>
            <Link to="/AllFoods">
              <button className="text-orange-400 btn btn-sm btn-outline  px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
                {offer.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
