import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import logoImg from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <div className='relative container mx-auto p-6'>
      {/* <!-- Flex container --> */}
      <div className='flex items-center justify-between'>
        {/* <!-- Logo --> */}
        <div className='pt-2'>
          <Image src={logoImg} alt='logo' className='h-8' />
        </div>
        {/* <!-- Menu Items --> */}
        <div className='hidden space-x-6 md:flex child-hover:bg-secondary child-hover:text-white child:duration-200 child:p-2 child:rounded-full'>
          <Link href='#'>
            Pricing
          </Link>
          <Link href='#'>
            Product
          </Link>
          <Link href='#'>
            About Us
          </Link>
          <Link href='#'>
            Careers
          </Link>
          <Link href='#'>
            Community
          </Link>
        </div>
        {/* <!-- Button --> */}
        <button
          href='#'
          className='hidden p-3 px-6 pt-2 text-white bg-primary rounded-full baseline hover:bg-secondary md:block duration-200'
        >
          Get Started
        </button>

        {/* <!-- Hamburger Icon --> */}
        <button
          id='menu-btn'
          className='block hamburger md:hidden focus:outline-none'
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div className='md:hidden'>
        <div
          id='menu'
          className='absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
        >
          <Link href='#'>Pricing</Link>
          <Link href='#'>Product</Link>
          <Link href='#'>About Us</Link>
          <Link href='#'>Careers</Link>
          <Link href='#'>Community</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
