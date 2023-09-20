import './page.scss';

import Image from 'next/image';
import Nav from '@/components/Nav/Nav';

import logo from '../../../public/logo-black.svg'

export default function Portfolio() {
    return(
        <>
            <div className="about-me__nav-wrapper">
                <Image className='logo' src={logo} width={150} height={150} alt="logo"/>
                <Nav color={'white'}/>
            </div>
        </>
    )
}
