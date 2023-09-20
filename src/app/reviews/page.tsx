import './page.scss';

import Image from 'next/image';
import Nav from '@/components/Nav/Nav';
import Review from '@/components/review/review';

import logo from '../../../public/logo-black.svg'

export default function Reviews() {
    return(
        <>
            <div className="reviews__nav-wrapper">
                <Image className='logo' src={logo} width={150} height={150} alt="logo"/>
                <Nav color={'black'}/>
            </div>
            {/* <Review photo='../../../public/client1.jpg' name='Елизавета' descr='Полина, я очень рада знакомству с тобой) спасибо тебе за такую крутую съёмку, я довольна результатами на 10/10❤️ Это была супер комфортная фотосессия, как с подружкой) однозначно вернусь к тебе ещё за красивыми кадрами) ❤️'/> */}
        </>
    )
}