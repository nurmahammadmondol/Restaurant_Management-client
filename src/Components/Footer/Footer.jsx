import React from 'react';
import Logo from '../../assets/Photo/Resturant Logo.png';

const Footer = () => {
  return (
    <footer className="bg-orange-300 ">
      <div className="footer  text-white text-lg p-10 md:p-20">
        <aside>
          <img className="w-48 lg:w-60" src={Logo} alt="" />
          <p className="text-2xl font-bold text-gray-200">
            <span>Trusted restaurant since 1998</span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>

      <div className="text-white pb-5">
        <p className="text-sm text-center ">
          © Created by Nur Mahammad Mondol Robiul, Study web development. All
          right reserved @Yum Yum Brits Restaurant 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
