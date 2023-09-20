import Image from '../../node_modules/next/image';
import Link from '../../node_modules/next/link';
import {Metadata} from 'next';

import './page.scss';
import inst from '../../public/instagram.svg';
import telegram from '../../public/telegram.svg';
import whatsapp from '../../public/whatsapp.svg';
import logo from '../../public/logo-white.svg';

export const metadata: Metadata = {
	title: 'Главная'
}

export default function Home() {
	return (
		<section className='mainPage'>
			<Image className='logo' src={logo} width={150} height={150} alt="logo"/>
			<div className='container'>
				<nav className='mainPage__nav'>
					<ul className='mainPage__list'>
						<li className="mainPage__list-item"><Link href='/'>Главная</Link></li>
						<li className="mainPage__list-item"><Link href='/about-me'>Обо мне</Link></li>
						<li className="mainPage__list-item"><Link href='/portfolio'>Портфолио</Link></li>
						<li className="mainPage__list-item"><Link href='/my-services'>Услуги</Link></li>
						<li className="mainPage__list-item"><Link href='/reviews'>Отзывы</Link></li>	
					</ul>
				</nav>
			</div>
			<div className="mainPage__madia">
				<div className="mainPage__madia-inst"><Link href='/'><Image src={inst} width={40} height={40} alt="instagram"/></Link></div>
				<div className="mainPage__madia-telegram"><Link href='/'><Image src={telegram} width={40} height={40} alt="telegram"/></Link></div>
				<div className="mainPage__madia-whatsapp"><Link href='/'><Image src={whatsapp} width={40} height={40} alt="whatsapp"/></Link></div>
			</div>
		</section>
	)
}
