import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function OptionSlider( { options , setOption } ) {

    const [ internalOption , setInternaloption ] = useState(0)

    function optionSliderFunction() {
        if (internalOption == 0) {
            setInternaloption(1)
            setOption(1)
        }else if (internalOption == 1) {
            setInternaloption(0)
            setOption(0)
        }
    }
    
  return (

    <div className='flex gap-8 items-center'>
        <p className={`font-semibold ${internalOption == 0 ? 'opacity-100' : 'opacity-60'}`}>{options[0]}</p>
        <div onClick={()=> optionSliderFunction()} className={`${internalOption == 0 ? 'bg-white dark:bg-[#23272F]' : 'bg-amber-400' } w-16 h-10 rounded-full flex items-center px-1 py-1 cursor-pointer`}>
            <div className={`h-8 w-8 ring-2 ring-amber-400  flex items-center justify-center rounded-full bg-white transition-transform duration-500 ${internalOption == 1 ? 'translate-x-6 rotate-180 dark:ring-amber-400' : 'dark:ring-[#23272F]' } text-black`}><KeyboardArrowLeftIcon /></div>
        </div>
            <p className={`font-semibold ${internalOption == 1 ? 'opacity-100' : 'opacity-60'}`}>{options[1]}</p>
    </div>
  )
}

export default OptionSlider