import Nav from '@/components/Nav/Nav';
import Image from 'next/image';
import Link from 'next/link';

import logoBlack from '../../../public/logo-black.svg';
import logoWhite from '../../../public/logo-white.svg';

import { IColorProps } from '@/components/Nav/Nav';

interface IHeaderProps extends IColorProps {
  logo: 'black' | 'white';
}

export default function Header({ color, logo }: IHeaderProps) {
  return (
    <header className="Header">
      {logo === 'white' ? (
        <Link href="/">
          <Image className="logo" src={logoWhite} width={150} height={150} alt="logo" />
        </Link>
      ) : (
        <Link href="/">
          <Image className="logo" src={logoBlack} width={150} height={150} alt="logo" />
        </Link>
      )}
      <Nav color={color} />
    </header>
  );
}
