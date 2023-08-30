import React, { useRef } from 'react'
import img1 from '../img/test.jpg'
import { Link } from 'react-router-dom'

function Customers({ name , id , profilePic , note }) {

  return (

    <div className='flex flex-col gap-3 items-center px-4 py-6 rounded-md select-none cursor-pointer mx-4
      border-[2px] shadow-md
      bg-white bg-opacity-60
    dark:bg-zinc-900 dark:bg-opacity-60 dark:backdrop-blur-xl dark:border-[1px] dark:border-slate-700 '>
        <img className='w-32 h-32 rounded-full' draggable={false} src={img1} alt="profilePic" />
        <div className='flex flex-col'>
          <h4 className='text-lg font-semibold'>{name}</h4>
          <div className='flex items-center gap-1'>
            <span className='opacity-60'>as</span>
            <Link draggable={false} className='opacity-80 text-sm dark:text-amber-400 text-amber-700 hover:text-amber-800 hover:underline dark:hover:text-amber-300 underline-offset-4'>{id}</Link>
          </div>
        </div>
        <p>{note}</p>
    </div>
  )
}

export default Customers;