import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateFood = () => {
  const LoaderFoodInfo = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    FoodName,
    Price,
    Quantity,
    FoodImage,
    FoodCategory,
    Description,
  } = LoaderFoodInfo;
  // console.log(LoaderFoodInfo);

  const handleUpdateForm = e => {
    e.preventDefault();
    const form = e.target;
    const FoodName = form.FoodName.value;
    const Price = form.Price.value;
    const Quantity = form.Quantity.value;
    const FoodImage = form.FoodImage.value;
    const FoodCategory = form.FoodCategory.value;
    const Description = form.Description.value;

    const updateData = {
      FoodName,
      Price,
      Quantity,
      FoodImage,
      FoodCategory,
      Description,
    };

    // Update server site :
    axios
      .put(
        `https://restaurant-management-server-side-seven.vercel.app/AllFoods/${_id}`,
        updateData
      )
      .then(res => {
        console.log(res.data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'This food information has been successfully updated.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(-1);
      })
      .catch(error => {
        console.log('Update fail', error.message);
      });
  };

  return (
    <div className="w-11/12 mx-auto min-h-screen my-20">
      <h4 className="text-3xl md:text-5xl font-bold  bangers-regular-font text-center mb-5">
        Update This Food
      </h4>
      <form
        onSubmit={handleUpdateForm}
        className="card-body flex flex-col gap-3"
      >
        <div className="md:flex gap-5 clear-start w-full mb-1 ">
          <label className="form-control w-full md:w-1/2 mb-2 md:mb-0">
            <div className="label">
              <span className="label-text  font-bold">Food Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter food name"
              defaultValue={FoodName}
              className="input  w-full  bg-slate-50"
              name="FoodName"
            />
          </label>

          <label className="form-control w-full md:w-1/2 mb-2 md:mb-0">
            <div className="label">
              <span className="label-text  font-bold">Food Category</span>
            </div>
            <input
              type="text"
              placeholder="Enter food name"
              defaultValue={FoodCategory}
              className="input  w-full  bg-slate-50"
              name="FoodCategory"
            />
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
              defaultValue={Price}
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
              defaultValue={Quantity}
              className="input  w-full bg-slate-50"
              name="Quantity"
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
              defaultValue={FoodImage}
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
              defaultValue={Description}
              placeholder="Enter describe it in at least 20 words."
              name="Description"
            ></textarea>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#E69138] text-white font-bold ">
            Update Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
