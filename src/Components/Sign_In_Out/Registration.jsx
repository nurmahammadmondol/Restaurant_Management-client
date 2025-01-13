import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BG from '../../assets/Photo/bg.png';
import { AuthContent } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../FirebaseProvider/Firebase.config';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';

import LottieRegistration from '../../assets/Lottie/Animation -2 Registration.json';

const Registration = () => {
  const { CreateUserWithEmail, CreateUserWithGoogle } = useContext(AuthContent);
  const [Error, setError] = useState(null);
  const navigate = useNavigate();

  const [passwordShow, setPasswordShow] = useState(false);

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

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Password validation failed',
        text: 'Must have an Uppercase letter, a lowercase letter, Length must be at least 6 character ?',
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    CreateUserWithEmail(email, password)
      .then(result => {
        console.log(result.user);
        setError(null);

        updateProfile(auth.currentUser, UserProfile)
          .then(() => {
            console.log('update success');
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your new account has been successfully created.',
              showConfirmButton: false,
              timer: 1500,
            });
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

  const handleCreateUserGoogle = () => {
    CreateUserWithGoogle()
      .then(result => {
        console.log(result.user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your new account has been successfully created.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleBack = () => {
    navigate(-1);
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
      <Helmet>
        <title>YumYum Bites | Registration</title>
      </Helmet>

      <div>
        <small
          onClick={handleBack}
          className="flex items-center  ml-5 gap-1 rancho-regular "
        >
          <i class="fa-solid fa-arrow-left"></i>Back
        </small>
      </div>

      <div className=" w-11/12 md:w-10/12  mx-auto bg-base-100  shrink-0 shadow-2xl my-10 rounded-md">
        <h4 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-5 bangers-regular-font">
          Registration a New Account
        </h4>

        <div className=" md:flex justify-between items-center gap-10">
          <div className="card w-full md:w-1/2">
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

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordShow ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div className="absolute right-3 bottom-3">
                  {passwordShow ? (
                    <small onClick={() => setPasswordShow(false)}>
                      <i class="fa-solid fa-eye-slash"></i>
                    </small>
                  ) : (
                    <small onClick={() => setPasswordShow(true)}>
                      <i class="fa-solid fa-eye"></i>
                    </small>
                  )}
                </div>
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
                  <input
                    type="checkbox"
                    className="checkbox checkbox-[#4478a7]"
                  />
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
              <button
                onClick={handleCreateUserGoogle}
                className="w-full btn bg-[#E69138] text-white"
              >
                <i class="fa-brands fa-google fa-bounce fa-xl"></i>Registration
                with Google
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
          <div className="w-full md:w-1/2 md:mr-5">
            <Lottie animationData={LottieRegistration}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
