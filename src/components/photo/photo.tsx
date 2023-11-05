import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface IPhotoProps {
  url: StaticImageData;
}

const Photo = ({ url }: IPhotoProps) => {
  return (
    <div className="photo-wrapper">
      <Image src={url} width={268} height={380} alt="portfolio-photo" />
      <div className="watermark"></div>
    </div>
  );
};

export default Photo;
