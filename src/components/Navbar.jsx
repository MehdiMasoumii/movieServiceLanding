import { createContext, useContext, useRef, useState } from 'react';
import Mainbtn from './Mainbtn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Toggler from './Toggler';
import LoginIcon from '@mui/icons-material/Login';
import SingUpIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';



function Navbar( { theme , setTheme , isNavigate , newHome } ) {

    const ColorsContext = createContext(false);
    const themeColor = useContext(theme)
    const [ loginToggle , setLoginToggle ] = useState(false);

    const navRef = useRef(null);

    function handleClickScroll( itemId ){
        if (itemId) {
          const element = document.querySelector(`#${itemId}`)
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function setTh() {
        if (themeColor == 'light') {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    const ListenNowItems = [
        {
            title : "Login",
            href : "",
            icon : <LoginIcon />
        },
        {
            title : "Sign up",
            href : "",
            icon : <SingUpIcon />
        }
    ]
    
    const NavItems = [
        {
            title : "What's Bebin",
            itemId : 'home-whatIsBebin'
        },
        {
            title : "Features",
            itemId : 'home-features'
        },
        {
            title : "Pricing",
            itemId : 'home-pricing'
        },
        {
            title : "Critics",
            itemId : 'home-critics'
        }
    ]
    

    function openTogglerCustom () {
        if (loginToggle == false) {
            setLoginToggle(true)
        }else if (loginToggle == true) {
            setLoginToggle(false)
        }
    }
    

  return (
        <div ref={navRef} className={` h-[70px] px-10 flex justify-between items-center  rounded-full border-2 border-black dark:border-zinc-600 transition-[width] duration-500 ${newHome ? `${isNavigate ? 'w-5/6 bg-white bg-opacity-95 dark:bg-zinc-900 dark:bg-opacity-80 border-opacity-10 dark:border-opacity-50  backdrop-blur-lg dark:backdrop-blur-xl' : 'w-full  border-opacity-0 dark:border-opacity-0 bg-none dark:bg-none'}` : `${isNavigate ? 'w-5/6 bg-white bg-opacity-90 dark:bg-zinc-900 dark:bg-opacity-80 border-opacity-10 dark:border-opacity-50  backdrop-blur-lg dark:backdrop-blur-xl' : 'w-full  border-opacity-0 dark:border-opacity-0 bg-none dark:bg-none'}` } `}>
            <div>
                <Link onClick={() => handleClickScroll('homePage')} to="/" className={`text-3xl font-bold ${newHome ? `${isNavigate ? 'text-black dark:text-white' : 'text-white'}` : ``}`}>Be<span className='text-amber-500'>Bin</span></Link>
            </div>
            <ul className='flex gap-4 font-medium'>
                {NavItems.map(( item , index )=>{
                    return <li key={index} className='hover:scale-105 transition-transform duration-300'><button onClick={() => handleClickScroll(item.itemId) } className={`px-3 py-4 rounded-full ${newHome ? `${isNavigate ? 'opacity-100 hover:bg-opacity-30 hover:bg-amber-200 dark:hover:bg-white dark:hover:bg-opacity-10' : 'text-white opacity-90 hover:bg-white hover:bg-opacity-20'}` : 'opacity-100 hover:bg-amber-200 hover:bg-opacity-20 dark:hover:bg-white dark:hover:bg-opacity-10' } hover:opacity-90 `} >{item.title}</button></li>
                })}
            </ul>

            <div className={`relative ${newHome ? `${isNavigate ? 'border-l-2' : ''}` : `border-l-2`} dark:border-gray-700 pl-5 flex gap-6 items-center `}>
                
                {themeColor == "light" ? 
                    <button className='cursor-pointer text-yellow-400 hover:text-violet-600 transition-all hover:bg-violet-600 hover:bg-opacity-10 px-2 py-2 rounded-full' onClick={setTh}><DarkModeIcon /></button> :
                    <button className='cursor-pointer text-violet-600 hover:text-yellow-400 transition-all hover:bg-yellow-500 hover:bg-opacity-10 px-2 py-2 rounded-full' onClick={setTh}><LightModeIcon /></button>
                }
                
                <Mainbtn title="Join Now !" customFunction={() => {openTogglerCustom()}} clickAnimation={true} size="medium" ColorsContext={ColorsContext}/>
                {loginToggle == true ? <div className='absolute right-0 top-16'>
                    <Toggler items={ListenNowItems} setIsOpen={setLoginToggle}/> 
                </div> : null}
            </div>
        </div>
  )
}

export default Navbar;