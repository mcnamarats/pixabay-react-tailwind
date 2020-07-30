import React from 'react';
import ImageCard from './ImageCard';

function ImageList({ images }) {
  return (
    <div className="grid grid-cols-3 gap-10">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageList;
