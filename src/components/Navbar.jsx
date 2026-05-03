'use client';

import Link from 'next/link';
import userAvatar from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';
import logoImg from '@/assets/book-logo.jpg';
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const imageSrc = user?.image && user?.image?.startsWith("http") ? user?.image : userAvatar;

    const [open, setOpen] = useState(false);

    return (
        <div className='flex items-center justify-between mx-5 md:mx-30 lg:mx-65 mt-6 relative'>


            <div className="flex items-center">
                <Link href={'/'}>
                    <Image
                        src={logoImg}
                        alt='book logo'
                        height={40}
                        width={40}
                        className='rounded-full'
                    />
                </Link>
            </div>


            <ul className='hidden md:flex gap-6 items-center text-gray-600'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/allbooks'}>All Books</NavLink>
                </li>
                <li>
                    <NavLink href={'/myprofile'}>My Profile</NavLink>
                </li>
            </ul>



            <div className="flex items-center gap-3">


                <div className='hidden md:flex items-center gap-3'>
                    {isPending ? (
                        <span className="loading loading-dots loading-sm"></span>
                    ) : user ? (
                        <div className='flex gap-2 items-center'>
                            <h2>Hello, {user.name}</h2>
                            <Image
                                className='rounded-full w-10 h-10'
                                src={imageSrc}
                                height={50}
                                width={50}
                                alt='user logo'
                            />
                            <button className='btn bg-gray-700 text-white'
                                onClick={async () => await authClient.signOut()}
                            >Logout </button>
                        </div>
                    ) : (
                        <button className='btn bg-gray-700 text-white'>
                            <Link href={'/login'}>Login</Link>
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button (RIGHT) */}
                <button
                    className='md:hidden text-2xl' onClick={() => setOpen(!open)}>

                    {open ? <IoMdClose className='text-3xl' /> : <IoMdMenu className='text-3xl' />}
                </button>
            </div>


            {open && (
                <div className='absolute top-14 right-0 w-64 bg-white shadow-lg rounded-lg p-3 flex flex-col gap-2 md:hidden z-50'>

                    <NavLink href={'/'} onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink href={'/allbooks'} onClick={() => setOpen(false)}>All Books</NavLink>
                    <NavLink href={'/myprofile'} onClick={() => setOpen(false)}>My Profile</NavLink>

                    <div className='border-t pt-2'>

                        {isPending ? (
                            <span className="loading loading-dots loading-sm"></span>
                        ) : user ? (
                            <div className='flex flex-col gap-2'>


                                <div className='flex items-center gap-2'>
                                    <Image
                                        className='rounded-full w-9 h-9'
                                        src={imageSrc}
                                        height={40}
                                        width={40}
                                        alt='user logo'
                                    />
                                    <span>Hello, {user.name}</span>
                                </div>

                                <button
                                    className='btn bg-gray-700 text-white btn-sm'
                                    onClick={async () => {
                                        await authClient.signOut();
                                        setOpen(false);
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button className='btn bg-gray-700 text-white btn-sm w-full'>
                                <Link href={'/login'} onClick={() => setOpen(false)}>
                                    Login
                                </Link>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;