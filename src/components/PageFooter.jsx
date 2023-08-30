import React from 'react'
import { Link } from 'react-router-dom'
import Mainbtn from './Mainbtn'

import MonitorIcon from '@mui/icons-material/Monitor';
import PreviewIcon from '@mui/icons-material/Preview';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

import FacebookIcon from '@mui/icons-material/Facebook'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

import CopyrightIcon from '@mui/icons-material/Copyright';

function PageFooter( { isVisible , moreVisible } ) {


    const SocialMediaIcons = [
        { icon :<FacebookIcon /> , href : ''} , 
        { icon : <InstagramIcon /> , href : ''} , 
        { icon : <TwitterIcon /> , href : ''} , 
        { icon : <LinkedInIcon /> , href : ''}  , 
        { icon : <PinterestIcon /> , href : ''}  
    ]

  return (

    <div className='h-[840px] flex flex-col'>

        { moreVisible && <div className='flex flex-col gap-6 pt-32 pb-10 px-36'>

                <p className='text-5xl font-semibold'>More</p>
                <div className='grid grid-cols-3 gap-10 '>
                    <div className='flex flex-col justify-between gap-8 px-12 py-12 bg-[#F7F8F9] bg-opacity-70 dark:bg-neutral-950 dark:bg-opacity-20 rounded-lg '>
                        <div className='scale-150'><RecentActorsIcon fontSize='large' /></div>
                        <Link className='text-lg font-semibold'>Critics List</Link>
                        <p className='h-[70px]'>
                            We are happy that we are working with the best Persian language critics and have their opinion in this site
                        </p>
                        <div><Mainbtn title={"Read more"} customFunction={() => {}} size={'medium'} clickAnimation={true}/></div>
                    </div>
                    <div className='flex flex-col justify-between gap-8 px-12 py-12 bg-[#F7F8F9] bg-opacity-70 dark:bg-neutral-950 dark:bg-opacity-20 rounded-lg '>
                        <div className='scale-150'><MonitorIcon fontSize='large' /></div>
                        <Link className='text-lg font-semibold'>Available Platforms</Link>
                        <p className='h-[70px]'>
                            You can use "Bebin" in all desktop platforms , android and ios
                        </p>
                        <div><Mainbtn title={"Read more"} customFunction={() => {}} size={'medium'} clickAnimation={true}/></div>
                    </div>
                    <div className='flex flex-col justify-between gap-8 px-12 py-12 bg-[#F7F8F9] bg-opacity-70 dark:bg-neutral-950 dark:bg-opacity-20 rounded-lg '>
                        <div className='scale-150'><PreviewIcon fontSize='large' /></div>
                        <Link className='text-lg font-semibold'>Review meetings</Link>
                        <p className='h-[70px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum ad ea soluta voluptate. Quam.
                        </p>
                        <div><Mainbtn title={"Read more"} customFunction={() => {}} size={'medium'} clickAnimation={true}/></div>
                    </div>
                </div>

                </div>}
        <div className='bg-zinc-950 dark:bg-opacity-80 h-full flex justify-between items-center text-white px-12'>

            <div className='flex flex-col gap-3 justify-center'>
                <Link to="/" className='text-3xl font-bold text-white'>Be<span className='text-amber-500'>Bin</span> Project</Link>
                <div className='flex gap-3'>
                    {SocialMediaIcons.map((item , index)=>{
                        return (<Link key={index} to={item.href} className='hover:scale-150 transition-all'>{item.icon}</Link>)
                    })}

                </div>
            </div>

            <div>
                    <ul className='flex gap-8'>
                        <li className=''>
                            <Link className='opacity-70 hover:underline hover:opacity-100 underline-offset-8'>Pricing</Link>
                        </li>
                        <li className=''>
                            <Link className='opacity-70 hover:underline hover:opacity-100 underline-offset-8'>Download Center</Link>
                        </li>
                        <li className=''>
                            <Link className='opacity-70 hover:underline hover:opacity-100 underline-offset-8'>Contact us</Link>
                        </li>
                        <li className=''>
                            <Link className='opacity-70 hover:underline hover:opacity-100 underline-offset-8'>About</Link>
                        </li>
                        <li className=''>
                            <Link className='opacity-70 hover:underline hover:opacity-100 underline-offset-8'></Link>
                        </li>
                    </ul>
            </div>

            <div className='flex flex-col items-center'>
                    <p>Developed by <Link className='text-amber-400 hover:underline underline-offset-4'>Mahdi Masoumi</Link></p>
                    <p className='text-sm opacity-50'>Copyright <CopyrightIcon fontSize='small'/> 2023 All Rights Reserved.</p>
            </div>

        </div>
    </div>
  )
}

export default PageFooter