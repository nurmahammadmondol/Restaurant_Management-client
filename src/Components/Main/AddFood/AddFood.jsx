import React from 'react';

const AddFood = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen my-20">
      <h4 className="text-3xl md:text-4xl font-bold  bangers-regular-font text-center">
        Add Food Item
      </h4>
      <form className="card-body flex flex-col gap-3">
        <div className="md:flex gap-5 clear-start w-full mb-1 ">
          <label className="form-control w-full md:w-1/2 mb-2 md:mb-0">
            <div className="label">
              <span className="label-text">Food Name</span>
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
              <span className="label-text">Food Category</span>
            </div>

            <select className="select w-full bg-slate-50 ">
              <option defaultValue="Select category name" disabled>
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
              <span className="label-text">Price</span>
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
              <span className="label-text">Quantity</span>
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
              <span className="label-text">Food Image</span>
            </div>
            <input
              type="text"
              placeholder="Enter food photo URL"
              className="input  w-full bg-slate-50"
              name="FoodImage"
            />
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#E69138] text-white font-bold ">
            Add Accessories
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
