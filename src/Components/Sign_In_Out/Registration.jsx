import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BG from '../../assets/Photo/bg.png';
import { AuthContent } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../FirebaseProvider/Firebase.config';

const Registration = () => {
  const { CreateUserWithEmail } = useContext(AuthContent);
  const [Error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCreateNewUser = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    const UserProfile = {
      displayName: name,
      photoURL: photo,
    };

    CreateUserWithEmail(email, password)
      .then(result => {
        console.log(result.user);
        setError(null);

        updateProfile(auth.currentUser, UserProfile)
          .then(() => {
            console.log('update success');
            navigate('/');
          })
          .catch(error => {
            console.log(error.message);
          });
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div
      className="p-5 min-h-screen flex flex-col "
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <h4 className="flex items-center  ml-5 gap-1 rancho-regular ">
          <i class="fa-solid fa-arrow-left"></i>Back
        </h4>
      </div>
      <div className="card bg-base-100 w-11/12 md:w-7/12 lg:w-6/12 mx-auto  shrink-0 shadow-2xl my-8">
        <h4 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-5 bangers-regular-font">
          Registration a New Account
        </h4>

        <form onSubmit={handleCreateNewUser} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-[#4478a7]" />
              <span className="label-text">
                Accept all our terms and conditions.
              </span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#E69138] text-white">
              Registration
            </button>
          </div>
          <div>{Error && <p className="text-red-500">{Error}</p>}</div>
        </form>

        <div className="divider ">Or</div>

        <div className="card-body">
          <button className="w-full btn bg-[#E69138] text-white">
            <i class="fa-brands fa-google fa-bounce fa-xl"></i>Registration with
            Google
          </button>

          <h6 className="text-end mt-5">
            Have an account ?
            <Link to="/Login">
              <span className=" ml-2  font-bold rancho-regular text-[#E69138]">
                Log In
              </span>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Registration;
