import './page.scss';
import Image from '../../../node_modules/next/image';
import {Metadata} from 'next';

import logo from '../../../public/logo-white.svg';

import photoCenter from '../../../public/about-me-center.png';
import photoTopRight from '../../../public/about-me-top-right.png';
import photoTopLeft from '../../../public/about-me-top-left.png';
import photoBottomRight from '../../../public/about-me-bottom-rigth.png';
import photoBottomLeft from '../../../public/about-me-bottom-left.png';

import Nav from '@/components/Nav/Nav';

export const metadata: Metadata = {
    title: 'Обо мне'
  }


export default function AboutMe () {
    return (
        <div className='about-me'>
            <div className="about-me__nav-wrapper">
                <Image className='logo' src={logo} width={150} height={150} alt="logo"/>
                <Nav color={'white'}/>
            </div>

            <div className="about-me__main-wrapper">
                <div className="about-me__main">
                    <div className="about-me__descr">
                        <h1>Я - Полина Миконович.</h1>
                        <h2>SMM-специалист c 2019 года</h2>
                        <div>
                            Мобильная съемка для меня - это про живые кадры, про «тот самый» момент, про стиль, комфорт, мобильность и скорость. Мои клиенты получают готовые фото в течении 24 часов после съёмки. Моя задача показывать вашу уникальную красоту и самые чистые эмоции.
                        </div>
                        <div>
                            Работаю с абсолютно разными нишами: визажисты, стилисты, магазины сумок, аксессуаров, массажисты, косметологи, логопеды, магазины автозапчастей, мягкой мебели, напольных покрытий и т.д. 
                            Так же являюсь соавтором INST.MK «Продающий профиль за 1 час».
                        </div>

                        <div>Я самоучка. Я не действую шаблонно, я действую по своему опыту. Делаю то, что помогает мне продавать разные товары и услуги в разных нишах.</div>
                    </div>
                </div>

                <div className="about-me__main-photo">
                    <Image className='about-me__main-photo-center' src={photoCenter} width={380} height={395} alt="my-photo"/>
                    <Image className='about-me__main-photo-top-left' src={photoTopLeft} width={155} height={178} alt="my-photo"/>
                    <Image className='about-me__main-photo-top-right' src={photoTopRight} width={213} height={244} alt="my-photo"/>
                    <Image className='about-me__main-photo-bottom-left' src={photoBottomLeft} width={185} height={235} alt="my-photo"/>
                    <Image className='about-me__main-photo-bottom-right' src={photoBottomRight} width={150} height={180} alt="my-photo"/>
                </div>
                
            </div>
        </div>
    )
}