import React from 'react'
import DoneIcon from '@mui/icons-material/Done';


function PricingMain( { option , plan } ) {

  return (
    
    <div className={`${option.badge ? ' bg-amber-400 text-white' : 'bg-white dark:bg-[#23272F]'} shadow-md rounded-2xl flex flex-col justify-between gap-8 pt-5`}>
        <div className='flex flex-col gap-7 items-start px-5'>
            <div className='flex flex-col items-start gap-3'>
                <h6 className={`py-3 px-5 ${option.badge ? 'bg-white text-black' : 'bg-amber-500 text-white'}  text-xl font-semibold inline-block rounded-2xl`}>{option.planName}</h6>
                <p className={`${option.badge ? 'opacity-90' : 'opacity-60 dark:opacity-50'}`}>{option.description}</p>
            </div>
            <p className='w-full text-start text-6xl font-semibold mt-4'><span className='opacity-30 dark:opacity-40'>$</span>{option.price}<span className={`text-base pl-1 ${option.badge ? 'opacity-70' : 'opacity-50 dark:opacity-60'}`}>/{plan}</span></p>
            <div className='w-full'>
                <button className={`w-full ${option.badge ? ' text-white bg-white bg-opacity-20 border-2 border-white border-opacity-20 hover:bg-slate-950' : ' text-black border-2 dark:bg-black dark:bg-opacity-30 dark:border-black dark:border-opacity-40 dark:text-white bg-white hover:text-white hover:bg-slate-950 hover:border-slate-950'} py-3 rounded-md font-semibold hover:bg-opacity-90 dark:hover:bg-opacity-90`}>Get started</button>
            </div>
            <div className='flex flex-col items-start gap-4 px-5'>
                <p className='font-semibold'>{option.planIncluding}</p>
                <ul className='flex flex-col items-start gap-3'>
                    {option.planOptions.map((item , index)=>{
                        return (<li key={index} className='flex gap-3 text-sm font-medium'><span className={`opacity-100  ${option.badge ? 'text-amber-700' : ''}`}><DoneIcon /></span> <span className={`${option.badge ? 'opacity-90' : 'opacity-60'}`}>{item}</span> </li>)
                    })}
                </ul>
            </div>
            
        </div>
        <div className={`py-2 ${option.badge ? 'bg-amber-600 bg-opacity-40' : 'bg-amber-400 text-white dark:bg-[rgb(22,24,28)]'} rounded-b-xl`}>
            <button className='py-2 px-2 font-medium'>See all features</button>
        </div>
       
    </div>
  )
}

export default PricingMain