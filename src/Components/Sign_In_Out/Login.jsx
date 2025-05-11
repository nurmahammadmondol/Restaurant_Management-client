import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BG from '../../assets/Photo/bg.png';
import { AuthContent } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import LottieLogin from '../../assets/Lottie/Animation - Login.json';

const Login = () => {
  const { LogInUserWithEmail, CreateUserWithGoogle } = useContext(AuthContent);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const [passwordShow, setPasswordShow] = useState(false);

  const handleLogInUser = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    LogInUserWithEmail(email, password)
      .then(result => {
        console.log(result.user, 'login success');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your account has been successfully logged in.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          position: 'top-end',
          icon: 'question',
          title: 'Your password is incorrect',
          text: 'Please enter the correct password ?',
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const handleCreateUserGoogle = () => {
    CreateUserWithGoogle()
      .then(result => {
        console.log(result.user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your account has been successfully logged in.',
          showConfirmButton: false,
          timer: 1500,
        });
        // আগের page থেকে এসেছে কিনা তা চেক করে navigate করো:
        navigate(from, { replace: true });
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
        <title>YumYum Bites | Login</title>
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
          LogIn Your Account
        </h4>

        <div className=" md:flex justify-between items-center gap-5">
          <div className="card w-full md:w-1/2">
            <form onSubmit={handleLogInUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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

                <div className="absolute right-3 bottom-11">
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

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#E69138] text-white">Login</button>
              </div>
            </form>

            <div className="divider ">Or</div>

            <div className="card-body">
              <button
                onClick={handleCreateUserGoogle}
                className="w-full btn bg-[#E69138] text-white"
              >
                <i class="fa-brands fa-google fa-bounce fa-xl"></i>Login with
                Google
              </button>

              <h6 className="text-end mt-5">
                Don't have an account ?
                <Link to="/Registration">
                  <span className=" ml-2  font-bold rancho-regular text-[#E69138]">
                    Registration
                  </span>
                </Link>
              </h6>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <Lottie animationData={LottieLogin}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
