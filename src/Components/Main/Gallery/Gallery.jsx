import React from 'react';
import Images from './Images';

const Gallery = () => {
  return (
    <div className="my-20 w-11/12 md:w-10/12 mx-auto">
      <h5 className="md:text-3xl font-bold bangers-regular-font mb-3 md:mb-10">
        Pictures of food available at our restaurant
      </h5>

      <div>
        <Images></Images>
      </div>
    </div>
  );
};

export default Gallery;
