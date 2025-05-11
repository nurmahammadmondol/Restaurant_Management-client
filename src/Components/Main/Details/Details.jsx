import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContent } from '../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';

const Details = () => {
  const navigate = useNavigate();
  const { User } = useContext(AuthContent);

  // console.log(User.displayName);
  // console.log(User.email);
  const LoaderDataDetails = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [Size, setSize] = useState(6);
  const [time, setTime] = useState(null);

  useEffect(() => {
    const Time = new Date().toLocaleString();
    setTime(Time);
  }, []);

  const {
    UserName,
    UserEmail,
    FoodName,
    Price,
    Quantity,
    FoodImage,
    Description,
  } = LoaderDataDetails;

  const str = Description;
  const words = str.split(' ');
  const wordCount = words.length;

  const handleSumQuantity = () => {
    if (Quantity > quantity) {
      const Sum = quantity + 1;
      setQuantity(Sum);
    } else {
      alert('Item is not available ');
    }
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      const Minus = quantity - 1;
      setQuantity(Minus);
    }
  };

  const handleAddToCart = quantity => {
    // console.log('success');

    const OrderFoodInfo = {
      FoodOwnerName: UserName,
      FoodOwnerEmail: UserEmail,
      OrderUserName: User?.displayName,
      OrderUserEmail: User?.email,
      Date: time,
      FoodImage,
      FoodName,
      Price,
      quantity,
      Size,
    };

    Swal.fire({
      title: 'Would you like to buy this food?',

      showCancelButton: true,
      cancelButtonColor: '#d11919',
      confirmButtonColor: '#eba75f',
      confirmButtonText: 'Yes, Buy Now ',
      html: ` <div class="space-y-2 text-start md:ml-5">

        <div class="flex flex-col gap-1">
          <small><i class="fa-regular fa-user mr-1"></i>Buyer Name : <span class="text-xs">${User?.displayName}</span></small>

          <small><i class="fa-regular fa-envelope mr-1"></i>Buyer Email : <span class="text-xs">${User?.email}</span></small>

          <small><i class="fa-regular fa-calendar-days mr-1"></i>Date : <span class="text-xs"> ${time}</span></small>

         
         
        </div>

          
          <small class="mr-3"><i class="fa-brands fa-intercom mr-1"></i></i>Quantity : ${quantity}</small>
          <small><i class="fa-brands fa-slack mr-1"></i>Size : ${Size}"</small>
         

        
        </div>`,
      imageUrl: `${FoodImage}`,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Custom Image',
    }).then(result => {
      if (result.isConfirmed) {
        // console.log(OrderFoodInfo);
        axios
          .post('http://localhost:3000/OrderFoods', OrderFoodInfo)
          .then(res => {
            console.log(res.data);
            Swal.fire({
              title: 'Success!',
              text: 'Your food has been ordered successfully..',
              icon: 'success',
              confirmButtonColor: '#eba75f',
            }).then(() => {
              navigate(0);
            });
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    });
  };

  const handleChangeSize = e => {
    const SizeNumber = parseInt(e.target.value);
    setSize(SizeNumber);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto my-5">
      <Helmet>
        <title>YumYum Bites | Details</title>
      </Helmet>

      <small
        onClick={handleBack}
        className="flex items-center  gap-1 rancho-regular lg:-ml-36 mb-5"
      >
        <i class="fa-solid fa-arrow-left"></i>Back
      </small>

      <h4 className="text-2xl  mb-5 bangers-regular-font border-b pb-1">
        Details :
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full lg:h-[500px">
        <div
          className="w-full h-full   rounded-2xl p-5 md:p-10 "
          data-aos="fade-right"
        >
          <img src={FoodImage} alt="" />
        </div>

        <div
          className="w-full h-full   rounded-2xl p-3 md:p-5 lg:p-10 space-y-2 lg:space-y-3 py-5 "
          data-aos="fade-left"
        >
          <h3 className="text-2xl md:text-4xl mb-5 bangers-regular-font">
            {FoodName}
          </h3>
          <div className="flex items-center  gap-4 border-b pb-1">
            <small>Reviews :</small>
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>

          <p className="text-sm">
            {wordCount >= 15 ? (
              { Description }
            ) : (
              <p>
                Enjoy a delicious and satisfying meal with our {FoodName}, made
                with the finest ingredients. Carefully crafted for a perfect
                balance of flavors, it's sure to satisfy your cravings. Ideal
                for a quick snack or a fulfilling meal, perfect for on-the-go or
                dining in.
              </p>
            )}
          </p>

          {Price > 300 ? (
            <div className=" bangers-regular-font flex items-center gap-5">
              <span className="text-red-500 font-bold  text-xl">
                $ {Price - 50}
              </span>

              <del className="text-gray-500 ">$ {Price}</del>
            </div>
          ) : (
            <div>
              <span className="text-red-500 font-bold bangers-regular-font  text-xl">
                $ {Price}
              </span>
            </div>
          )}

          <ul className="text-sm space-y-1">
            <li>
              <i class="fa-brands fa-slack mr-2"></i>Free global shipping on all
              orders
            </li>
            <li>
              <i class="fa-brands fa-slack mr-2"></i>3 Hours easy returns if you
              change your mind
            </li>
            <li>
              <i class="fa-brands fa-slack mr-2"></i>Order before noon for same
              day dispatch
            </li>
          </ul>

          <div className="flex flex-wrap items-center  gap-3 py-3">
            <h6 className="text-xl  bangers-regular-font">Quantity</h6>
            <div className="border rounded-lg px-5 py-2 flex justify-between items-center gap-4">
              <button onClick={handleMinusQuantity}>-</button>
              {quantity}
              <button onClick={handleSumQuantity}>+</button>
            </div>

            {User ? (
              <button
                onClick={() => handleAddToCart(quantity)}
                className="btn bg-orange-400 text-white flex items-center gap-2 uppercase text-xs font-bold  px-10"
              >
                <i class="fa-solid fa-cart-shopping"></i>Buy Now
              </button>
            ) : (
              <Link to="/Login">
                <button className="btn bg-orange-400 text-white flex items-center gap-2 uppercase text-xs font-bold  px-10">
                  <i class="fa-solid fa-cart-shopping"></i>Buy Now
                </button>
              </Link>
            )}

            <div>
              <select
                onChange={handleChangeSize}
                className="btn text-orange-500"
              >
                <option value="6">Size 6"</option>
                <option value="10">Size 10"</option>
                <option value="16">Size 16"</option>
                <option value="32">Size 32"</option>
              </select>
            </div>
          </div>

          <ul className="text-sm space-y-1">
            <li>
              <span className="font-bold">SKU : </span>
              Aerodynamic-small1103-hat-68579029
            </li>
            <li>
              <span className="font-bold">Categories :</span> Burrito, Salads
            </li>
            <li>
              <span className="font-bold">Tags :</span> fast food, good meal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
