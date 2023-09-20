"use client"

import './Nav.scss';

import Link from '../../../node_modules/next/link';
import { usePathname } from 'next/navigation'

interface IColorProps {
    color: 'black' | 'white'
}

const navItems = [
    {label: "Обо мне", href:'/about-me'},
    {label: "Портфолио", href:'/portfolio'},
    {label: "Услуги", href:'/my-services'},
    {label: "Отзывы", href:'/reviews'}
]

export default function Nav(props: IColorProps) {
        const pathname = usePathname()

        return (
        <nav className='nav'>
        <ul className='nav__list'>
            <li className="nav__list-item" style={{color: props.color}}><Link href='/'>Главная</Link></li>
            {navItems.map(item => {
                if(item.href === pathname) {
                    return <li className="nav__list-item activ" key={item.label}><Link href={item.href}>{item.label}</Link></li>
                } else {
                    return <li className="nav__list-item" key={item.label}><Link href={item.href}>{item.label}</Link></li>
                }
            })}
        </ul>
    </nav>
    )
}