import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
  const LoaderDataDetails = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [Size, setSize] = useState(6);

  const {
    _id,
    UserName,
    UserEmail,
    FoodName,
    Price,
    Quantity,
    FoodImage,
    FoodCategory,
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
      alert('Not Available ');
    }
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      const Minus = quantity - 1;
      setQuantity(Minus);
    }
  };

  const handleAddToCart = quantity => {
    console.log('success');
    Swal.fire({
      title: 'Would you like to buy this food?',

      showCancelButton: true,
      cancelButtonColor: '#d11919',
      confirmButtonColor: '#eba75f',
      confirmButtonText: 'Yes, Buy Now ',
      html: ` <div class="flex justify-center gap-10  font-bold">
          <small><i class="fa-brands fa-intercom mr-1"></i></i>Quantity : ${quantity}</small>
          <small><i class="fa-brands fa-slack mr-1"></i>Size : ${Size}"</small>
        </div>`,
      imageUrl: `${FoodImage}`, // Add your image here
      imageWidth: 100, // Adjust width of the image
      imageHeight: 100, // Adjust height of the image
      imageAlt: 'Custom Image', // Alt text for the image
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success!',
          text: 'Your food has been ordered successfully..',
          icon: 'success',
          confirmButtonColor: '#eba75f',
        });
      }
    });
  };

  const handleChangeSize = e => {
    const SizeNumber = parseInt(e.target.value);
    setSize(SizeNumber);
  };

  return (
    <div className="w-11/12 md:w-9/12 mx-auto my-20">
      <h4 className="text-2xl  mb-5 bangers-regular-font border-b pb-1">
        Details <i class="fa-solid fa-arrow-right "></i>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full md:h-[500px]">
        <div className="w-full h-full   rounded-2xl p-5 md:p-10 ">
          <img src={FoodImage} alt="" />
        </div>
        <div className="w-full h-full   rounded-2xl p-3 md:p-10 space-y-3 py-5 ">
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
                balance of flavors, it's sure to satisfy your cravings. Each
                bite delivers a mouthwatering combination of [main ingredients],
                all packed in a [type of bread/packaging]. Ideal for a quick
                snack or a fulfilling meal, perfect for on-the-go or dining in.
              </p>
            )}
          </p>
          <p className=" bangers-regular-font flex items-center gap-5">
            <span className="text-red-500 font-bold  text-xl ">
              $ {Price - 50}
            </span>

            <del className="text-gray-500 ">$ {Price}</del>
          </p>
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

          <div className="flex flex-wrap items-center  gap-3 py-5">
            <h6 className="text-xl  bangers-regular-font">Quantity</h6>
            <div className="border rounded-lg px-5 py-2 flex justify-between items-center gap-4">
              <button onClick={handleMinusQuantity}>-</button>
              {quantity}
              <button onClick={handleSumQuantity}>+</button>
            </div>
            <button
              onClick={() => handleAddToCart(quantity)}
              className="btn bg-orange-400 text-white flex items-center gap-2 uppercase text-xs font-bold  px-10"
            >
              <i class="fa-solid fa-cart-shopping"></i>Buy Now
            </button>
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
