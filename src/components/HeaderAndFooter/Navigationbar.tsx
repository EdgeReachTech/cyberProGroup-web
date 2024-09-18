"use client";
import React, { useContext } from 'react'
import Logo from './Logo'
import NavigationItems from './NavigationItems'
import SearchBar from './SearchBar'
import { MyContext } from './contextProvider'

import { MdClose } from "react-icons/md";

const NavigationBar = () => {

  const context = useContext(MyContext);
  if (!context) {
    return null;
  }
  const { value, setValue } = context;

  return (
    <div className='w-full p-[2px] lg:p-5'>
      <div className='anotherContainer flex justify-between bg-white m-5 rounded-[30px] py-4 lg:py-7 px-[50px] lg:px-[100px] box-border'>
        <Logo />
        {value ? (
          <div className='searchButton flex items-center gap-5 -mt-[2px]'>
            <input type="text" placeholder="what are you looking for" className="w-full md:w-[400px] lg:w-[600px] text-[15px] px-3 border-[1px] border-blue-500 rounded-[20px] py-[3px] outline-none" />
            <button onClick={() => setValue(false)}><MdClose className="w-7 h-7" /></button>
          </div>
        ) : (
          <div className='flex items-center gap-5'>
            <NavigationItems />
            <SearchBar />
          </div>
        )}
      </div>
    </div>
  )
}

export default NavigationBar