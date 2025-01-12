import React from 'react';
import Images from './Images';
import Title from '../TitlePage/Title';
import bgi2 from '../../../assets/Photo/ai-generated-.jpg';
import { Helmet } from 'react-helmet';

const Gallery = () => {
  return (
    <div className="my-10 w-11/12 md:w-10/12 mx-auto">
      <Helmet>
        <title>YumYum Bites | Gallery</title>
      </Helmet>

      <div className="mb-14 md:mb-20">
        <Title
          title={`Pictures of food available at our restaurant`}
          bgi2={bgi2}
        ></Title>
      </div>

      {/* <h5 className="md:text-3xl font-bold bangers-regular-font mb-3 md:mb-10">
        Pictures of food available at our restaurant
      </h5> */}

      <div>
        <Images></Images>
      </div>
    </div>
  );
};

export default Gallery;
