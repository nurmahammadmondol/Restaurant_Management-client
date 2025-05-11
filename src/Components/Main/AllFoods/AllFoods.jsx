import React, { useEffect, useState } from 'react';
import { data, useLoaderData } from 'react-router-dom';
import SingleFoodCard from './SingleFoodCard';
import muffinLogo from '../../../assets/Photo/muffin_PNG24.png';
import burritoLogo from '../../../assets/Photo/food-burrito-stroke-9a4868.webp';
import taco from '../../../assets/Photo/file (2).png';
import { Helmet } from 'react-helmet';
import { BiSolidOffer } from 'react-icons/bi';
import {
  FaBirthdayCake,
  FaCoffee,
  FaGift,
  FaHandPointRight,
  FaPizzaSlice,
} from 'react-icons/fa';

const AllFoods = () => {
  const LoaderData = useLoaderData();
  console.log(parseInt(LoaderData?.length));

  const [Data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  console.log(searchTerm);

  const [parPageItem, setParPageItem] = useState(4);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [countFoods, setCountFoods] = useState(null);

  const TotalPages = Math.ceil(countFoods / parPageItem);
  const Pages = [...Array(TotalPages).keys()];

  useEffect(() => {
    fetch(
      `http://localhost:3000/AllFoods?CurrentPage=${CurrentPage}&parPageItem=${parPageItem}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, [CurrentPage, parPageItem]);

  useEffect(() => {
    setCountFoods(LoaderData?.length);
  }, []);

  const handleParPagesItems = e => {
    const ParPageItems = parseInt(e.target.value);
    setParPageItem(ParPageItems);
    setCurrentPage(1);
  };

  const handlePrePage = () => {
    if (CurrentPage > 1) {
      setCurrentPage(CurrentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (CurrentPage < Pages.length) {
      setCurrentPage(CurrentPage + 1);
    }
  };

  // const handleSearch = event => {
  //   setSearchTerm(event.target.value.toLowerCase());

  //   const filteredItems = Data.filter(item =>
  //     item.FoodName.toLowerCase().includes(searchTerm)
  //   );

  //   setData(filteredItems);
  //   setParPageItem(LoaderData?.length);
  // };

  const handleSearch = event => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim().length > 0) {
      // ইনপুটে যদি ১টা বা তার বেশি অক্ষর থাকে, তাহলে ফিল্টার করো
      const filteredItems = Data.filter(item =>
        item.FoodName.toLowerCase().includes(value)
      );
      setData(filteredItems);
    } else {
      // ইনপুট একদম ফাঁকা হলে পুরো Data লোড করো
      setData(LoaderData);
    }

    setParPageItem(LoaderData?.length);
  };

  return (
    <div className="w-11/12 mx-auto my-10 ">
      <Helmet>
        <title>YumYum Bites | All Foods</title>
      </Helmet>
      <div className="mb-10 md:mb-20">
        <div className="w-full  border-b-2  md:flex justify-between items-center py-2 px-1">
          <h4 className=" md:text-2xl  font-bold mb-2 md:mb-0">
            All the food is on this page :
          </h4>
          <div>
            <label className="input bg-slate-50 flex items-center gap-2 px-5">
              <input
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                className="grow "
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-16 mb-20">
        <div
          className="border rounded-xl p-5 mb-5 md:mb-0"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <h6 className="text-3xl bangers-regular-font mb-3 border-b-2">
              CATEGORIES
            </h6>

            <div>
              <ul className="space-y-4">
                <li>
                  <i class="fa-solid fa-burger mr-2"></i>Burger
                </li>
                <li>
                  <i class="fa-solid fa-pizza-slice mr-2"></i>Pizza
                </li>
                <li>
                  <i class="fa-solid fa-hotdog mr-2"></i>Sandwich
                </li>
                <li>
                  <i class="fa-solid fa-blender mr-2"></i>Milkshake
                </li>
                <li className="flex items-center gap-2">
                  <img className="w-4 h-4" src={muffinLogo} alt="" />
                  Muffin
                </li>
                <li className="flex items-center gap-2">
                  <img className="w-4 h-4" src={burritoLogo} alt="" />
                  Burrito
                </li>
                <li className="flex items-center gap-2">
                  <img className="w-4 h-4" src={taco} alt="" />
                  Taco
                </li>
                <li>
                  <i class="fa-solid fa-wine-glass mr-2"></i>Soft Drink
                </li>
                <li>
                  <i class="fa-solid fa-wand-magic-sparkles mr-2"></i>Specials
                </li>
              </ul>
            </div>

            <h6 className="text-3xl bangers-regular-font mt-10 md:mt-16 mb-3 border-b-2">
              Size
            </h6>
            <div className="flex items-center gap-2">
              <button className="btn btn-circle bg-orange-100 text-orange-500">
                6"
              </button>
              <button className="btn btn-circle bg-orange-100 text-orange-500">
                10"
              </button>
              <button className="btn btn-circle bg-orange-100 text-orange-500">
                16"
              </button>
              <button className="btn btn-circle bg-orange-100 text-orange-500">
                32"
              </button>
            </div>

            <h6 className="text-2xl bangers-regular-font mt-10 md:mt-16 mb-3 border-b-2 flex items-center gap-2">
              <BiSolidOffer /> Offer Items
            </h6>

            <div className="flex flex-col gap-3">
              <div className="collapse collapse-plus bg-orange-50">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-orange-400 font-medium flex items-center gap-2">
                  <FaPizzaSlice size={20} /> Buy 1 Get 1 Free
                </div>
                <div className="collapse-content">
                  <p className="text-orange-300 flex items-center gap-2">
                    Order a large pizza (32") now. <FaHandPointRight />
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-orange-50">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-orange-400 font-medium flex items-center gap-2">
                  <FaCoffee size={20} /> Happy Hour Deals
                </div>
                <div className="collapse-content">
                  <p className="text-orange-300 flex items-end ">
                    Enjoy 10% off on all drinks from 1pm to 5pm, So order now!
                    <FaHandPointRight />
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-orange-50">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-orange-400 font-medium flex items-center gap-2">
                  <FaBirthdayCake size={20} />
                  Birthday Special
                </div>
                <div className="collapse-content">
                  <p className="text-orange-300 flex items-end ">
                    Get a free dessert on your birthday! Just show your ID.
                  </p>

                  <input
                    type="file"
                    className="file-input file-input-xs file-input-warning  file-input-bordered  w-full mt-4"
                  />
                </div>
              </div>

              <div className="collapse collapse-plus bg-orange-50">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-orange-400 font-medium  flex items-center gap-2">
                  <FaGift size={20} /> Festival Discount
                </div>
                <div className="collapse-content">
                  <p className="text-orange-300 ">
                    Enjoy exclusive discounts on special occasions!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {Data.length > 0 ? (
          <div className="col-span-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {Data.map(food => (
                <SingleFoodCard key={food._id} food={food}></SingleFoodCard>
              ))}
            </div>
            <div className="mt-14 flex justify-center items-center gap-3">
              <div>
                <select
                  value={parPageItem}
                  onChange={handleParPagesItems}
                  className="btn btn-sm text-orange-500"
                >
                  <option disabled>{parPageItem}</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </div>
              <button
                onClick={handlePrePage}
                className="btn  btn-sm  font-bold text-orange-500"
              >
                Pre
              </button>
              {Pages.map((page, i) => (
                <button
                  onClick={() => setCurrentPage(page + 1)}
                  key={i}
                  className={`btn btn-sm  font-bold ${
                    CurrentPage == page + 1
                      ? 'bg-orange-500 text-white '
                      : 'text-orange-500'
                  }`}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                className="btn  btn-sm  font-bold text-orange-500"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="min-h-screen w-11/12 mx-auto flex flex-col justify-center items-center">
            <small className="text-center mb-1">Loading...</small>
            <progress className="progress w-56"></progress>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
