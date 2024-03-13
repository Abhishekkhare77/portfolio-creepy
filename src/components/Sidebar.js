"use client";
import { CircleUserRound, FolderOpenDot, Home, Phone, Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  // Function to determine if the link is active
  const isActive = (href) => pathname === href;

  return (
    <>
    
      <div className='hidden sm:block fixed top-0 z-50 left-0 h-full w-14 bg-black shadow shadow-red-800'>
        <div className='flex flex-col items-center h-full justify-between'>
          <div className='flex flex-col items-center gap-5 mt-5'>
            <Link href='/'>
              <div className={`relative`}>
                {isActive('/') && <div className='absolute -top-1 -left-3 h-10 w-[2px] bg-red-500'></div>}
                <Home className={`h-7 w-7 ${isActive('/') ? 'text-red-500 ' : 'text-gray-400'} hover:text-red-500`} />
              </div>
            </Link>
            <Link href='/about'>
              <div className={`relative`}>
                {isActive('/about') && <div className='absolute -top-1 -left-3 h-10 w-[2px] bg-red-500'></div>}
                <CircleUserRound className={`h-7 w-7 ${isActive('/about') ? 'text-red-500 ' : 'text-gray-400'} hover:text-red-500`} />
              </div>
            </Link>
            <Link href='/projects'>
              <div className={`relative`}>
                {isActive('/projects') && <div className='absolute -top-1 -left-3 h-10 w-[2px] bg-red-500'></div>}
                <FolderOpenDot className={`h-7 w-7 ${isActive('/projects') ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`} />
              </div>
            </Link>
            <Link href='/contact'>
              <div className={`relative`}>
                {isActive('/contact') && <div className='absolute -top-1 -left-3 h-10 w-[2px] bg-red-500'></div>}
                <Phone className={`h-7 w-7 ${isActive('/contact') ? 'text-red-500 ' : 'text-gray-400'} hover:text-red-500`} />
              </div>
            </Link>
          </div>
          <div className='mb-5'>
            <Settings className='h-7 w-7 text-gray-400 hover:text-white' />
          </div>
        </div>
      </div>
      <div className='block sm:hidden fixed left-0 z-50 bottom-0 h-14 w-screen bg-black shadow shadow-red-800'>
      <div className='flex items-center h-full w-full'>
        <div className='flex items-center justify-around'>
          <Link href='/'>
            <div className={`relative`}>
              {isActive('/') && <div className='absolute -top-1 -left-3 h-10 w-[2px] bg-red-500'></div>}
              <Home className={`h-7 w-7 ${isActive('/') ? 'text-red-500 ' : 'text-gray-400'} hover:text-red-500`} />
            </div>
          </Link>
          <Link href='/about'>
            <div className={`relative`}>
              {isActive('/about') && <div className='absolute -top-1 -left-3 h-10 w-[2px] bg-red-500'></div>}
              <CircleUserRound className={`h-7 w-7 ${isActive('/about') ? 'text-red-500 ' : 'text-gray-400'} hover:text-red-500`} />
            </div>
          </Link>
          <Link href='/projects'>
            <div className={`relative`}>
              {isActive('/projects') && <div className='absolute -top-1 -left-3 h-10 w-[2px] bg-red-500'></div>}
              <FolderOpenDot className={`h-7 w-7 ${isActive('/projects') ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`} />
            </div>
          </Link>
          <Link href='/contact'>
            <div className={`relative`}>
              {isActive('/contact') && <div className='absolute -top-1 -left-3 h-10 w-[2px] bg-red-500'></div>}
              <Phone className={`h-7 w-7 ${isActive('/contact') ? 'text-red-500 ' : 'text-gray-400'} hover:text-red-500`} />
            </div>
          </Link>
          <Settings className='h-7 w-7 text-gray-400 hover:text-white' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar;
