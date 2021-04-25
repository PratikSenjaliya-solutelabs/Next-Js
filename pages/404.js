import React from 'react';
import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function NotFound() {
const router=useRouter();

 useEffect(() => {
      setTimeout(() => {
          router.push('/');
      }, 3000);
    }, [])

    return (
        <div className="not-found">
            <h1>Oppsss....</h1>
            <p>This page can not be found</p>
            <p>Go back to the<Link href="/"><a>Homepage </a></Link></p>
        </div>
    )
}
