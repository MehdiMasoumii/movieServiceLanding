import React, { useEffect, useRef, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function PricingSmall( { options , name , discription , price , scale , badge , isInvise } ) {

    //newbie
    // For those people who rarely watch movies
    const Pricing = useRef(null);
    const [ countPrice , setCountPrice ] = useState(0);

    useEffect(()=>{
        Pricing.current.classList.add(scale);
        if (badge) {
            Pricing.current.classList.add('bg-amber-500');
            Pricing.current.classList.add('z-10');
            Pricing.current.classList.add('text-white');
            Pricing.current.classList.add('ring-white');
            Pricing.current.classList.add('dark:ring-[#1B1B2F]');
        }else {
            Pricing.current.classList.add('ring-amber-500');
            Pricing.current.classList.add('text-black');
            Pricing.current.classList.add('dark:text-white');
        }
        if (isInvise == true) {
            priceShowing ()
        }
    },[isInvise])

    let i = 0;
    function priceShowing () {

        setCountPrice(i)
        i++;
            setTimeout(()=>{
                if ( i <= price) {
                    priceShowing ();
                }
            } , 80)
    }

  return (


    <div ref={Pricing} className={`relative px-8 py-10  rounded-xl text-center flex flex-col gap-6 justify-center w-[330px] ring-8`}>

        <div className='absolute text-white left-7 top-7 scale-[230%]'>
            {badge}
        </div>
        <div>
            <h4 className='text-3xl font-bold'>{name}</h4>
            <p className={`text-sm  ${badge ?' opacity-90' : 'opacity-60'}`}>{discription}</p>
        </div>
        <p className='text-6xl font-bold'>${countPrice}<span className='text-sm'>/mo</span></p>
        <ul className='flex flex-col gap-2 px-6'>
            {options.map((item , index)=>{
                return (<li key={index} className='flex items-center gap-1'><CheckCircleIcon />{item}</li>)
            })}
        </ul>
        <button className={`inline-block ${badge ? ' text-black bg-white ' : ' text-white dark:text-black bg-[#1B1B2F] dark:bg-white'} py-3 rounded-xl font-semibold hover:bg-opacity-90 dark:hover:bg-opacity-90`}>Subscribe</button>
    </div>

  )
}

export default PricingSmall;