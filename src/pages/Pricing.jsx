import React, { useState } from 'react'
import PricingMain from '../components/PricingMain'
import OptionSlider from '../components/OptionSlider'

function Pricing() {

  const [ planOption , setPlanoption ] = useState(0);


  const PricingoptionsMonthly = [
    {
      planName : 'Newbie',
      description : 'For those people who rarely watch movies',
      price : 5,
      planOptions : [
        'Limited badges', 'Simple profile' , 'Limited schedule' , 'Limited badges'
      ],
      planIncluding : 'Newbie includes:'
    },
    {
      planName : 'Pro',
      description : 'For those people who watch movies regularly',
      price : 10,
      planOptions : [
        'Pro badges' , 'Customizable profile' , 'Pro schedule' , 'Pro schedule'
      ],
      planIncluding : 'Everything in Newbie, plus:'
    },
    {
      planName : 'Ultra',
      description : 'For movie killers and sicks',
      price : 15,
      planOptions : [
        'Full badges' , 'Full customizable profile' , 'Pro schedule', 'Full badges'
      ],
      planIncluding : 'Everything in Pro, plus:',
      badge : true
    }
  ]
  const PricingoptionsYearly = [
    {
      planName : 'Newbie',
      description : 'For those people who rarely watch movies',
      price : 48,
      planOptions : [
        'Limited badges', 'Simple profile' , 'Limited schedule' , 'Limited badges'
      ],
      planIncluding : 'Newbie includes:'
    },
    {
      planName : 'Pro',
      description : 'For those people who watch movies regularly',
      price : 96,
      planOptions : [
        'Pro badges' , 'Customizable profile' , 'Pro schedule' , 'Pro schedule'
      ],
      planIncluding : 'Everything in Newbie, plus:'
    },
    {
      planName : 'Ultra',
      description : 'For movie killers and sicks',
      price : 144,
      planOptions : [
        'Full badges' , 'Full customizable profile' , 'Pro schedule', 'Full badges'
      ],
      planIncluding : 'Everything in Pro, plus:',
      badge : true
    }
  ]

  return (

    <div className='flex flex-col items-center pt-44 pb-28 gap-16 px-40 bg-[#F7F8F9] dark:bg-[#191B21] '>
      <div className='flex flex-col gap-7'>
        <h5 className='text-6xl font-bold'>Choose your right plan!</h5>
        <p className='text-xl opacity-75'>Select from best plans, ensuring a perfect match. Need more or less? <br />
        Customize your subscription for a seamless fit!</p>
      </div>
      
      <div className='relative'>
        <OptionSlider options={['Monthly' , 'Yearly']} setOption={setPlanoption}/>
        <p className={`absolute -right-2 -top-5 text-xs font-bold bg-amber-100 text-amber-500 px-1 py-1 rounded-sm ${planOption == 0 ? 'opacity-60' : 'opacity-100'}`}>20% OFF</p>
      </div>
      {planOption == 1 ? <div className='grid grid-cols-3 gap-6'>
        {PricingoptionsYearly.map((item , index)=>{
          return ( <PricingMain key={index} option={item} plan={'year'} />)
        })}
      </div> :
      <div className='grid grid-cols-3 gap-6'>
        {PricingoptionsMonthly.map((item , index)=>{
          return ( <PricingMain key={index} option={item} plan={'month'} />)
        })}
      </div>
      }
      
      
    </div>
  )
}

export default Pricing