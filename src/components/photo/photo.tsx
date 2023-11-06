import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface IPhotoProps {
  url: StaticImageData;
}

const Photo = ({ url }: IPhotoProps) => {
  return <Image src={url} width={268} height={380} alt="portfolio-photo" />;
};

export default Photo;
