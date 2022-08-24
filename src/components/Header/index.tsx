import Image from 'next/image';
import React from 'react';
import Menu from '../Card';
import { Container, Input, LogoContainer, SearchContainer } from './styles';


const Header: React.FC = () => {
  return (
    <>
      <Container>
        <LogoContainer>
          <Image width={150} height={60} src={'/logo_white.svg'} alt='ZIPPIA LOGO' />
        </LogoContainer>
        <div className='flex'>
          <SearchContainer>
            <Input type="text" placeholder='Job Title' name='jobTitle' />
            <div className='py-2 w-px h-full bg-gray-300'></div>
            <Input type="text" placeholder='Location' name='location' />
          </SearchContainer>
          <button type='button' className='bg-zippia_orange p-2 items-center justify-center rounded-r-md  hidden lg:flex'>P</button>
        </div>

        <div className='flex gap-4 items-center'>
          <a href="#">JOBS</a>
          <a href="#">CARRERS</a>
          <div className='flex gap-2'>
            <button className='button  bg-[#4c4c4c] hover:bg-zippia_blue'>LOG IN</button>
            <button className='button bg-zippia_blue'>SIGN UP</button>
          </div>
        </div>
      </Container>
    </>

  )
}

export default Header;
