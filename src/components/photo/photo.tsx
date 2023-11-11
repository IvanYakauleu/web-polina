'use client';

import './photo.scss';

import Image from 'next/image';

import { useState } from 'react';
import { StaticImageData } from 'next/image';

interface IPhotoProps {
  url: StaticImageData;
}

const Photo = ({ url }: IPhotoProps) => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  const openImage = (image: StaticImageData) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      <Image
        src={url}
        width={268}
        height={380}
        alt="portfolio-photo"
        onClick={() => openImage(url)}
      />
      {selectedImage && (
        <div className="fullscreen-image" onClick={closeImage}>
          <Image src={url} alt="Selected Image" />
        </div>
      )}
    </>
  );
};

export default Photo;
