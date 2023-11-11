'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import closeImage from 'public/close-white.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface ISliderProps {
  mass: StaticImageData[];
  selectedImage: number;
  close: () => void;
}

export default function PhotoSlider({ mass, selectedImage, close }: ISliderProps) {
  return (
    <div className="slider__wrapper">
      <div className="close" onClick={() => close()}>
        <Image src={closeImage} width={25} height={25} alt="close button" />
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        centeredSlides={true}
        modules={[Navigation, Pagination]}
        initialSlide={selectedImage - 1}
        className="mySwiper">
        {mass.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="swiper__photo-wrapper">
              <Image src={item} alt="portfolio-photo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
