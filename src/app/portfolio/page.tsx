'use client'

import { useEffect, useCallback } from 'react';

import './page.scss';

import Image from 'next/image';
import Nav from '@/components/Nav/Nav';

import logo from '../../../public/logo-black.svg'

export default function Portfolio() {
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
        request('http://localhost/bot.php')
            .then(data => console.log(data))
    }, [])

    return(
        <>
            <header className="portfolio__nav-wrapper">
                <Image className='logo' src={logo} width={150} height={150} alt="logo"/>
                <Nav color={'black'}/>
            </header>
        </>
    )
}
