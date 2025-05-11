import React, { useContext, useState } from 'react';
import { AuthContent } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { data } from 'autoprefixer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddFood = () => {
  const navigate = useNavigate();
  const { User } = useContext(AuthContent);
  const [FoodCategory, setFoodCategory] = useState('');

  const handleFoodCategoryName = e => {
    setFoodCategory(e.target.value);
  };

  const handleSubmitAddFoodForm = e => {
    e.preventDefault();

    const form = e.target;
    const UserName = form.UserName.value;
    const UserEmail = form.UserEmail.value;
    const FoodName = form.FoodName.value;
    const Price = form.Price.value;
    const Quantity = form.quantity.value;
    const FoodImage = form.FoodImage.value;
    const Description = form.Description.value;

    const All_Data = {
      UserName,
      UserEmail,
      FoodName,
      Price,
      Quantity,
      FoodImage,
      FoodCategory,
      Description,
    };

    axios
      .post('http://localhost:3000/AllFoods', All_Data)
      .then(data => {
        console.log(data.data);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your new food has been successfully added.',
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleBack = () => {
    // console.log('back');
    navigate(-1);
  };

  return (
    <div className="w-11/12 mx-auto min-h-screen my-5">
      <Helmet>
        <title>YumYum Bites | Add Food</title>
      </Helmet>
      <small
        onClick={handleBack}
        className="flex items-center  ml-5 gap-1 rancho-regular "
      >
        <i class="fa-solid fa-arrow-left"></i>Back
      </small>
      <h4 className="text-3xl md:text-5xl font-bold  bangers-regular-font text-center mb-5">
        Add Food Item
      </h4>
      <form
        onSubmit={handleSubmitAddFoodForm}
        className="card-body flex flex-col gap-3"
      >
        <div className="md:flex gap-5 clear-start w-full mb-1 ">
          <label className="form-control w-full md:w-1/2 mb-2 md:mb-0">
            <div className="label">
              <span className="label-text font-bold">Add By User Name</span>
            </div>
            <input
              type="text"
              className="input  w-full  bg-slate-50"
              value={User?.displayName}
              name="UserName"
            />
          </label>

          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Add By User Email</span>
            </div>
            <input
              type="text"
              className="input  w-full bg-slate-50"
              value={User?.email}
              name="UserEmail"
            />
          </label>
        </div>

        <div className="md:flex gap-5 clear-start w-full mb-1 ">
          <label className="form-control w-full md:w-1/2 mb-2 md:mb-0">
            <div className="label">
              <span className="label-text  font-bold">Food Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter food name"
              className="input  w-full  bg-slate-50"
              name="FoodName"
            />
          </label>

          <label className="form-control w-full md:w-1/2 m">
            <div className="label">
              <span className="label-text font-bold">Food Category</span>
            </div>

            <select
              className="select w-full bg-slate-50 "
              value={FoodCategory}
              onChange={handleFoodCategoryName}
            >
              <option value="" disabled>
                Select food category
              </option>
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Milkshake">Milkshake</option>
              <option value="Muffin">Muffin</option>
              <option value="Burrito">Burrito</option>
              <option value="Taco">Taco</option>
              <option value="Soft Drink">Soft Drink</option>
            </select>
          </label>
        </div>

        <div className="md:flex gap-5 clear-start w-full mb-1 ">
          <label className="form-control w-full md:w-1/2 mb-2 md:mb-0">
            <div className="label">
              <span className="label-text font-bold">Price</span>
            </div>
            <input
              type="text"
              placeholder="Enter price"
              className="input  w-full  bg-slate-50"
              name="Price"
            />
          </label>

          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Quantity</span>
            </div>
            <input
              type="text"
              placeholder="Enter quantity"
              className="input  w-full bg-slate-50"
              name="quantity"
            />
          </label>
        </div>

        <div className="md:flex gap-5 clear-start w-full mb-1 ">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-bold">Food Image</span>
            </div>
            <input
              type="text"
              placeholder="Enter food photo URL"
              className="input  w-full bg-slate-50"
              name="FoodImage"
            />
          </label>
        </div>

        <div className="md:flex gap-5 clear-start w-full mb-1 ">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-bold">Description</span>
            </div>
            <textarea
              className="textarea  w-full bg-slate-50"
              placeholder="Enter describe it in at least 20 words."
              name="Description"
            ></textarea>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#E69138] text-white font-bold ">
            Add New Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
