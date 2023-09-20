import './page.scss';

import Image from '../../../node_modules/next/image';
import Link from '../../../node_modules/next/link';
import { Metadata } from 'next';

import Nav from '@/components/Nav/Nav';
import Services from './Services';

import logo from '../../../public/logo-black.svg';

export const metadata: Metadata = {
    title: "Услуги",
    description: "Предоставляемые услуги"
}

export default function MyServices() {

    return (
        <>
        <div className="my-services">
            <header className="my-services__nav-wrapper">
                <Link href='/'><Image className='logo' src={logo} width={150} height={150} alt="logo"/></Link>
                <Nav color={'black'}/>
            </header>
            <Services/>
        </div>
        </>
    )
}