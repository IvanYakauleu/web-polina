import './page.scss';

import Photo from '@/components/photo/photo';

import photo1 from 'public/portfolio/IMG_0241.jpg';
import photo2 from 'public/portfolio/Facetune_02-10-2023-10-48-36.jpg';
import photo3 from 'public/portfolio/Facetune_16-08-2023-10-44-43.jpg';
import photo4 from 'public/portfolio/Facetune_19-09-2023-16-06-55.jpg';
import photo5 from 'public/portfolio/Facetune_21-08-2023-13-54-39.jpg';
import photo6 from 'public/portfolio/Facetune_28-09-2023-10-15-47.jpg';
import photo7 from 'public/portfolio/Facetune_31-07-2023-11-47-56.jpg';
import photo8 from 'public/portfolio/IMG_1279.jpg';
import photo9 from 'public/portfolio/IMG_1550.jpg';
import photo10 from 'public/portfolio/IMG_1630.jpg';
import photo11 from 'public/portfolio/IMG_1639.jpg';
import photo12 from 'public/portfolio/IMG_2053.jpg';
import photo13 from 'public/portfolio/IMG_2089.jpg';
import photo14 from 'public/portfolio/IMG_2093.jpg';
import photo15 from 'public/portfolio/IMG_2118.jpg';
import photo16 from 'public/portfolio/IMG_2173.jpg';
import photo17 from 'public/portfolio/IMG_2240.jpg';
import photo18 from 'public/portfolio/IMG_2347.jpg';
import photo19 from 'public/portfolio/IMG_2350.jpg';
import photo20 from 'public/portfolio/IMG_2418.jpg';

export default function Portfolio() {
  const massPhoto = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
  ];

  return (
    <>
      <main className="portfolio__main-wrapper">
        {massPhoto.map((photo, i) => (
          <Photo key={i} url={photo} />
        ))}
      </main>
    </>
  );
}
