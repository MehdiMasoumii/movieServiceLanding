import { useContext, useState , useEffect } from 'react'
import { useInViewEffect } from 'react-hook-inview';

import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import StarsIcon from '@mui/icons-material/Stars';
import Mainbtn from '../components/Mainbtn'
import Secondbtn from '../components/Secondbtn'
import PricingSmall from '../components/PricingSmall';
import CustomersComponent from '../components/CustomersComponent';

import svg1 from '../svg/Home/home2.svg';
import svg1dark from '../svg/Home/home2simple.svg';
import svg2 from '../svg/Home/home3.svg';
import svg2dark from '../svg/Home/home3dark.svg';
import sec2svg1 from '../svg/Home/sec2svg1.svg';
import sec2svg1dark from '../svg/Home/sec2svg1dark.svg';
import sec2svg2 from '../svg/Home/sec2svg2.svg';
import sec2svg2dark from '../svg/Home/sec2svg2dark.svg';


function Home( { ThemeContext } ) {

  const theme = useContext(ThemeContext);
  
  const [sec11IsVisible, setSec11IsVisible] = useState(false)
  const [sec12IsVisible, setSec12IsVisible] = useState(false)
  const [sec2IsVisible, setSec2IsVisible] = useState(false)
  const [ customersComp , setCustomersComp ] = useState(null)

  useEffect(()=>{

    setCustomersComp(<Carousel responsive={responsive} autoPlay={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} partialVisible={true} 
          itemClass="carousel-item-padding-40" autoPlaySpeed={2500}>
            {Customers.map((item , index)=>{

            return ( <CustomersComponent key={index} name={item.name} id={item.id} profilePic={item.profilePic} note={item.note} /> )

            })}
          </Carousel>)
  } , [])

  const sec11Ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
      setSec11IsVisible(entry.isIntersecting)
    },
    { threshold: 0.7 },
  )
  const sec12Ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
      setSec12IsVisible(entry.isIntersecting)
    },
    { threshold: 0.7 },
  )
  const sec2Ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
      setSec2IsVisible(entry.isIntersecting)
    },
    { threshold: 0.4 },
  )

  function svgOnLoad (target , option) {
    setTimeout(()=>{
      if (option == 'up') {
        target.target.classList.add(`animate-[wiggleInfUp_5s_infinite]`)
      }else if (option == 'down') {
        target.target.classList.add(`animate-[wiggleInfDown_5s_infinite]`)
      }
    } , 1502)
    // target.target.classList.remove('animate-[wiggle_1.5s]')
  }
  function svgDivOnLoad (target){
      target.target.classList.add('animate-[wiggle_1.5s]')
  }

  const Pricings = [
    {
      name : "Newbie",
      options : [
        'Limited badges',
        'Simple profile',
        'Limited schedule'
      ],
      discription : "For those people who rarely watch movies",
      price : 5,
      color : 'bg-red-500',
      scale : 'scale-[100%]'
    },
    {
      name : "Ultra",
      options : [
        'Full badges',
        'Full customisable profile',
        'Pro schedule'
      ],
      discription : "For movie killers and sicks",
      price : 15,
      color : 'bg-blue-500',
      scale : 'scale-[120%]',
      badge : <StarsIcon />
    },
    {
      name : "Pro",
      options : [
        'Pro badges',
        'Customisable profile',
        'Pro schedule'
      ],
      discription : "For those people who watch movies ",
      price : 10,
      color : 'bg-violet-500',
      scale : 'scale-[100%]'
    }
    
  ]

  const Customers = [
    {
      name : 'Mammad',
      id : '@mammad007',
      profilePic : 'test.jpg',
      note : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, reiciendis.'
    },
    {
      name : 'Ali',
      id : '@alijokerwtf',
      profilePic : 'test.jpg',
      note : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, reiciendis.'
    },
    {
      name : 'Pouya',
      id : '@pouyaflower',
      profilePic : 'test.jpg',
      note : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, reiciendis.'
    },
    {
      name : 'Navid',
      id : '@navidbachesaal',
      profilePic : 'test.jpg',
      note : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, reiciendis.'
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  


  return (

    <div className='flex flex-col pt-20' >
      <div className='pt-28 pb-48 m flex flex-col gap-8 relative'>
        <div className='absolute left-0 top-60'>{<img onLoad={(target)=> {svgDivOnLoad (target)}} className='w-[400px] opacity-0' src={theme == 'dark' ? svg1dark : svg1} alt="" />}</div>
        <div className='absolute left-0 top-60'>{<img onLoad={(target)=> {svgOnLoad (target , 'down')}} className='w-[400px] opacity-0' src={theme == 'dark' ? svg1dark : svg1} alt="" />}</div>
        <div className='z-10 flex flex-col gap-8'>
          <h2 className='text-7xl font-bold px-[400px]'>Choose your next movie and schedule to watch it</h2>
          <p className='text-xl px-[500px]'>Communicate with cinephile people, see IMDB score of movies, genre, ... , and choose your next movie</p>
          <div className='flex gap-4 justify-center items-center'>
            <Secondbtn title={"View plans"} 
            customFunction={() => {}} size={'medium'} clickAnimation={true}/>
            <Mainbtn title={"Join Now !"} 
            customFunction={() => {}} size={'medium'} clickAnimation={true}/> 
          </div>
        </div>
        <div  className='absolute right-0 -top-2'>{<img onLoad={(target)=> {svgDivOnLoad (target)}} className='w-[475px] opacity-0' src={theme == 'dark' ? svg2dark : svg2} alt="" />}</div>
        <div  className='absolute right-0 -top-2'>{<img onLoad={(target)=> {svgOnLoad (target , 'up')}} className='w-[475px] opacity-0' src={theme == 'dark' ? svg2dark : svg2} alt="" />}</div>
      </div>
      <section id='home-sec1' className='flex flex-col gap-14 justify-center bg-[#F7F8F9] dark:bg-[#23272F] py-36'>
        <p className={`text-5xl font-semibold ${sec11IsVisible == true ? ('animate-[wiggle_2s] opacity-100') : 'opacity-0'}`}>Features</p>
        <div className='flex items-center justify-start gap-24 px-24' >
          <img ref={sec11Ref} src={theme == 'dark' ? sec2svg1dark : sec2svg1} className={`w-[450px]  ${sec11IsVisible == true ? ('animate-[wiggleLeft_2s] opacity-100') : 'opacity-0'}`} alt="" />
          <div ref={sec11Ref} className={`tracking-wide text-start pr-4pl-40 flex flex-col gap-3 ${sec11IsVisible == true ? ('animate-[wiggle_2s] opacity-100') : 'opacity-0'}`}>
            <p  className={`text-2xl  list-item  `}>
            Talk to people about movies, series, actors, ... <br />
            Consult with them and choose your next movie <br /></p>
            <span className='font-light text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui dolor tempora, quis recusandae sed quasi porro provident assumenda voluptate?</span>
            <div className='mt-4'>
              <Secondbtn title={"Read more"} customFunction={() => {}} size={'medium'} clickAnimation={true}/>
            </div>
          </div>
          
        </div>
        <div  className='flex items-center justify-start gap-24 px-24 ' >
          <div ref={sec12Ref} className={`tracking-wide text-start pl-40 flex flex-col gap-3 ${sec12IsVisible == true ? ('animate-[wiggle_2s] opacity-100') : 'opacity-0'}`}>
            <p  className={`text-2xl  list-item  `}>
            Create and schedule your watchlist and set notification<br />
            View the time of showing movies in the cinema<br /></p>
            <span className='font-light text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui dolor tempora, quis recusandae sed quasi porro provident assumenda voluptate?</span>
            <div className='mt-4'>
              <Secondbtn title={"Read more"} customFunction={() => {}} size={'medium'} clickAnimation={true}/>
            </div>
          </div>
          <img ref={sec12Ref} src={theme == 'dark' ? sec2svg2dark : sec2svg2} className={`w-[450px]  ${sec12IsVisible == true ? ('animate-[wiggleRight_2s] opacity-100') : 'opacity-0'}`} alt="" />
          
        </div>
      </section>
      <section  id='home-sec2' className=''>

        <div ref={sec2Ref} className={`flex flex-col  items-center justify-center gap-16 pt-44 pb-56 ${sec2IsVisible == true ? ('animate-[wiggle_1.5s] opacity-100') : 'opacity-0'}`}>
          <p className='text-5xl font-semibold'>Plans</p>
          <div  className={`flex items-center justify-center gap-6 px-40 `}>
            {Pricings.map(( item ,index ) => {
              return ( <PricingSmall key={index} isInvise={sec2IsVisible} name={item.name} discription={item.discription} options={item.options} price={item.price} color={item.color} scale={item.scale} badge={item.badge} />)
            })}
          </div>
        </div>
        {/* <PricingSmall name={"Newbie"} discription={"For those people who rarely watch movies"}
        price={5}
        /> */}

      </section>
      <section id='home-sec3' className='relative flex flex-col gap-10 bg-[#F7F8F9] dark:bg-[#23272F] py-36'>
        
        {/* <div className='absolute -left-[6%] w-[110%] h-[130%] bg-amber-500 opacity-90 dark:opacity-70 rotate-2 z-0'></div> */}
        <p className='text-5xl font-semibold'>Our best critics</p>
        <div className='px-32 z-20'>
          {customersComp}
        </div>

      </section>
    </div>
  )
}

export default Home;
