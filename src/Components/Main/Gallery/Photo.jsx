import React from 'react';

// interface ImageProps {
//   data: {
//     src: 'string',
//     title: 'string',
//     description: 'string',
//   }[];
//   onClick: () => void;
// }

const Photo = props => {
  const { data, onClick } = props;

  const handleClickImage = index => {
    onClick(index);
  };

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
      {data.map((slide, index) => (
        <div
          onClick={() => {
            handleClickImage(index);
          }}
          className="w-full h-[160px] md:h-[220px] hover:cursor-pointer"
        >
          <img
            className="w-full h-full rounded-lg border "
            src={slide.src}
            alt={slide.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Photo;
