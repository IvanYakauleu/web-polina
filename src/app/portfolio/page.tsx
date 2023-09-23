'use client'

import { useEffect, useCallback, useState } from 'react';

import './page.scss';

import Image from 'next/image';
import Nav from '@/components/Nav/Nav';

import logo from '../../../public/logo-black.svg'

export default function Portfolio() {
    const [photo, setPhoto] = useState([])

    const request = useCallback(async (url: string, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        
        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }

            const data = await response.json();
            return data;
            
        } catch(e) {
            throw e;
        }
    }, [])

    useEffect(() => {
        request('http://localhost/api.php')
            .then(data => setPhoto(data.photo))
    }, [])

    return(
        <>
            <header className="portfolio__nav-wrapper">
                <Image className='logo' src={logo} width={150} height={150} alt="logo"/>
                <Nav color={'black'}/>
            </header>
            <main className='portfolio__main-wrapper'>
                {photo.map((item, num) => {
                    return <Image className='client-photo' src={item} alt="client-logo" width={268} height={380} key={num}/>
                })}
            </main>
        </>
    )
}
