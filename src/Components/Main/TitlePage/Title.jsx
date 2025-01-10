import React from 'react';

const Title = ({ title, bgi2 }) => {
  return (
    <div
      className="h-[200px] w-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgi2})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7,
      }}
    >
      <h4 className="md:text-3xl lg:text-5xl  text-center bangers-regular-font  text-white">
        {title}
      </h4>
    </div>
  );
};

export default Title;
