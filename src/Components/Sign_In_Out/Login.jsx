import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BG from '../../assets/Photo/bg.png';
import { AuthContent } from '../AuthProvider/AuthProvider';

const Login = () => {
  const { LogInUserWithEmail, CreateUserWithGoogle } = useContext(AuthContent);
  const navigate = useNavigate();

  const handleLogInUser = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    LogInUserWithEmail(email, password)
      .then(result => {
        console.log(result.user, 'login success');
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCreateUserGoogle = () => {
    CreateUserWithGoogle()
      .then(result => {
        console.log(result.user);
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
      <div>
        <small
          onClick={handleBack}
          className="flex items-center  ml-5 gap-1 rancho-regular "
        >
          <i class="fa-solid fa-arrow-left"></i>Back
        </small>
      </div>
      <div className="card bg-base-100 w-11/12 md:w-7/12 lg:w-6/12 mx-auto  shrink-0 shadow-2xl my-8">
        <h4 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-5 bangers-regular-font">
          LogIn Your Account
        </h4>

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
            <i class="fa-brands fa-google fa-bounce fa-xl"></i>Login with Google
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
    </div>
  );
};

export default Login;
