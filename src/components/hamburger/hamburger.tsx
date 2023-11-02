'use client';

import './hamburger.scss';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import hamburgerBlack from 'public/hamburger-black.svg';
import hamburgerWhite from 'public/hamburger-white.svg';
import closeBlack from 'public/close-black.svg';
import closeWhite from 'public/close-white.svg';

export interface IColorProps {
  color: 'black' | 'white';
}

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Обо мне', href: '/about-me' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Услуги', href: '/my-services' },
  { label: 'Отзывы', href: '/reviews' },
];

export default function Hamburger({ color }: IColorProps) {
  const pathname = usePathname();
  const [hamburger, setHamburger] = useState(false);

  const modal = () => {
    setHamburger(!hamburger);
    document.body.style.overflow = hamburger ? 'auto' : 'hidden';
  };

  return (
    <>
      <nav className="nav-hamburger">
        <div className="hamburger" onClick={modal}>
          <Image
            src={
              hamburger
                ? color === 'white'
                  ? closeWhite
                  : closeBlack
                : color === 'white'
                ? hamburgerWhite
                : hamburgerBlack
            }
            width={50}
            height={50}
            alt="hamburger"
          />
        </div>
        <ul
          className="nav-hamburger__list"
          style={hamburger ? { transform: 'none' } : { transform: 'translateX(-500px)' }}>
          {navItems.map((item) => {
            if (item.href === pathname) {
              return (
                <li
                  className="nav-hamburger__list-item"
                  key={item.label}
                  style={{ color: '#326F32' }}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            } else {
              return (
                <li
                  onClick={() => modal()}
                  className="nav-hamburger__list-item"
                  key={item.label}
                  style={{ color: 'white' }}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </>
  );
}
