import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { fastFoodItems } from '../../../Data';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import Photo from './photo';

const Images = () => {
  // const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open image</button> */}

      <Photo
        data={fastFoodItems}
        onClick={correctIndex => {
          setIndex(correctIndex);
        }}
      ></Photo>

      <div className="">
        <Lightbox
          plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
          captions={{
            showToggle: true,
            descriptionTextAlign: 'end',
          }}
          // open={open}
          // close={() => setOpen(false)}

          index={index}
          open={index >= 0}
          slides={fastFoodItems}
          close={() => setIndex(-1)}
        />
      </div>
    </>
  );
};

export default Images;
