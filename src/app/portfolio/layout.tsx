import Header from '@/components/Header/Header';
import { Metadata } from 'next';
import Hamburger from '@/components/hamburger/hamburger';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Портфолио',
  description: 'Моё портфолио',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header logo="black" color="black" />
      <Hamburger color="black" />
      <div className="portfolio__nav-items">
        <Link className="portfolio__nav-item" href={'/portfolio/mobile'}>
          Мобильная съемка
        </Link>
        |
        <Link className="portfolio__nav-item" href={'/portfolio/visual'}>
          Визуал
        </Link>
        |
        <Link className="portfolio__nav-item" href={'/portfolio/packaging'}>
          Полная упаковка
        </Link>
      </div>
      {children}
    </>
  );
}
