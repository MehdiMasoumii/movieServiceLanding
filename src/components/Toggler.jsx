
import { useClickAway } from '@uidotdev/usehooks';
import React from 'react'
import { Link } from 'react-router-dom';

function Toggler( { items , setIsOpen } ) {

    const togglerRef = useClickAway(() => {
        setIsOpen(false);
    });

  return (
        <div ref={togglerRef} className='absolute top-0 right-0 bg-white dark:bg-zinc-900 border-[1px] shadow-sm dark:border-[1px] dark:border-slate-700 rounded-md'>
            <ul className='px-1 py-1 flex flex-col items-center justify-center'>
                {items.map((item)=>{
                    return (
                        <li  key={item.index} className=''>
                            <Link className='inline-block text-center w-36 py-4 px-3 opacity-70 border-2 border-opacity-0 dark:hover:border-opacity-0 hover:border-2 border-amber-400 rounded-md hover:border-amber-400 hover:text-amber-500 dark:hover:bg-amber-500 dark:hover:bg-opacity-10 dark:hover:text-amber-400  dark:opacity-70 dark:hover:opacity-100 ' to={item.href}>
                            <div className='flex items-center gap-2 px-3'>
                                <div>{item.icon}</div>
                                <div>{item.title}</div>
                            </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
  )
}

export default Toggler;


  // function OptionHover (target) {

    //     // target.currentTarget.classList.add("");
    //     target.currentTarget.classList.add("dark:text-amber-400");
    // }
    // function OptionUnHover(target) {
    //     target.currentTarget.classList.remove("bg-amber-500");
    //     target.currentTarget.classList.remove("text-white");
    //     target.currentTarget.classList.remove("dark:text-amber-400");
    // }
    // onMouseEnter={(target)=> OptionHover(target)} onMouseLeave={(target)=>OptionUnHover(target)}
    