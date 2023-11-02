import Header from '@/components/Header/Header';
import { Metadata } from 'next';
import Hamburger from '@/components/hamburger/hamburger';

export const metadata: Metadata = {
  title: 'Портфолио',
  description: 'Моё портфолио',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header logo="black" color="black" />
      <Hamburger color="black" />
      {children}
    </>
  );
}
