'use client'
import React, {useContext} from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa6';
import { TbEye, TbBell, TbUser, TbStar, TbMessage } from 'react-icons/tb';
import { AiOutlineStop } from 'react-icons/ai';
import { UserContext } from '@/context/userContextProvider';


export default function ProfileLayout({ children }) {
    // const {user} = useContext(UserContext)

    const user = {
        id: "598fde00-d21b-4bee-8b99-a2a0b17a809f"
    }

    return (
        <>
        { user &&
                <section>
                <nav className='bg-slate-700 flex p-2 gap-2'>
                <Link href='/profile'>
                    <button className='big-btn'>
                    Profile <TbUser className='text-xl' />
                    </button>
                </Link>
                <Link href='/profile/watchlist'>
                    <button className='big-btn'>
                    Watchlist <TbEye className='text-xl' />
                    </button>
                </Link>
                <Link href='/profile/reviewed'>
                    <button className='big-btn'>
                    Reviewed <TbStar className='text-xl' />
                    </button>
                </Link>
                <Link href='/profile/followed'>
                    <button className='big-btn'>
                    Followed <TbBell className='text-xl' />
                    </button>
                </Link>
                <Link href='/profile/favourites'>
                    <button className='big-btn'>
                    Favourites <FaHeart className='text-xl' />
                    </button>
                </Link>
                <Link href='/profile/ignored'>
                    <button className='big-btn'>
                    Ignored <AiOutlineStop className='text-xl' />
                    </button>
                </Link>
                <Link href='/profile/commented'>
                    <button className='big-btn'>
                    Commented <TbMessage className='text-xl' />
                    </button>
                </Link>
                </nav>
            </section>
        }
        {!user && 
                    <Link href='/login'>
                    <button className='big-btn'>
                           Sign In !!!
                   </button>
                </Link>
        }
        {children}
        </>
    );
}
``