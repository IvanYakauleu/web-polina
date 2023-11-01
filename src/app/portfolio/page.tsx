'use client'

import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { useEffect, useCallback, useState } from 'react';

type Repo = {
    name: string
    stargazers_count: number
  }

import './page.scss';

import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
    // const [photo, setPhoto] = useState([])

    // const request = useCallback(async (url: string, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    //     try {
    //         const response = await fetch(url, {method, body, headers});

    //         if (!response.ok) {
    //             throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    //         }

    //         const data = await response.json();
    //         return data;
            
    //     } catch(e) {
    //         throw e;
    //     }
    // }, [])

    // useEffect(() => {
    //     request('http://localhost/api.php')
    //         .then(data => setPhoto(data.photo))
    // }, [])

    return(
        <>
            <div className="portfolio__nav-items">
                <Link className='portfolio__nav-item' href={"/portfolio/mobile"}>Мобильная съемка</Link>
                |
                <Link className='portfolio__nav-item' href={"/portfolio/visual"}>Визуал</Link>
                |
                <Link className='portfolio__nav-item' href={"/portfolio/packaging"}>Полная упаковка</Link>
            </div>
            <main className='portfolio__main-wrapper'>
                {/* {photo.map((item, num) => {
                    return <Image className='client-photo' src={item} alt="client-logo" width={268} height={380} key={num}/>
                })} */}
            </main>
        </>
    )
}
