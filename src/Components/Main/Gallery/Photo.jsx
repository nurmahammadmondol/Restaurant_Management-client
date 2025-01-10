import React from 'react';
import { motion } from 'motion/react';

const Photo = props => {
  const { data, onClick } = props;

  const handleClickImage = index => {
    onClick(index);
  };

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
      {data.map((slide, index) => (
        <motion.div
          onClick={() => {
            handleClickImage(index);
          }}
          className="w-full h-[160px] md:h-[220px] hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ stiffness: 400, damping: 10 }}
        >
          <img
            className="w-full h-full rounded-lg border "
            src={slide.src}
            alt={slide.description}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Photo;
