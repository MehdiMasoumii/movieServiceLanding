import { useContext, useState , useEffect } from 'react'
import { useInViewEffect } from 'react-hook-inview';

import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import StarsIcon from '@mui/icons-material/Stars';
import Mainbtn from '../components/Mainbtn'
import Secondbtn from '../components/Secondbtn'
import Pricing from './Pricing'
import CriticsSlider from '../components/CriticsSlider';

// import svg1 from '../svg/Home/home2.svg';
// import svg1dark from '../svg/Home/home2simple.svg';
// import svg2 from '../svg/Home/home3.svg';
// import svg2dark from '../svg/Home/home3dark.svg';
import sec2svg1 from '../svg/Home/sec2svg1.svg';
import sec2svg1dark from '../svg/Home/sec2svg1dark.svg';
import sec2svg2 from '../svg/Home/sec2svg2.svg';
import sec2svg2dark from '../svg/Home/sec2svg2dark.svg';
import homeImage from '../img/HomeMovie.jpg'
import movies1 from '../img/movies1.jpg'



function Home( { ThemeContext } ) {

  const theme = useContext(ThemeContext);
  
  const [sec11IsVisible, setSec11IsVisible] = useState(false)
  const [sec12IsVisible, setSec12IsVisible] = useState(false)
  const [sec2IsVisible, setSec2IsVisible] = useState(false)
  const [ criticsComp , setCriticsComp ] = useState(null)
  const [ whatIsVisible , setWhatIsVisible ] = useState(false);

  useEffect(()=>{

    setCriticsComp(<Carousel responsive={responsive} autoPlay={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} partialVisible={true} 
          itemClass="carousel-item-padding-40" autoPlaySpeed={2500}>
            {Customers.map((item , index)=>{

            return ( <CriticsSlider key={index} name={item.name} id={item.id} profilePic={item.profilePic} note={item.note} /> )

            })}
          </Carousel>)
  } , [])


  const whatIsRef = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
      setWhatIsVisible(entry.isIntersecting)
    },
    { threshold: 0.7 },
  )
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
  }

  function handleClickScroll ( itemId ) {

    if (itemId) {
      const element = document.querySelector(`#${itemId}`)
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(123);

  }
  
  


  return (


    <div className='flex flex-col' >
      <div id='homePage' className={`relative w-full h-screen pt-28 pb-36 text-white`}>
        <div className={`absolute top-0 w-full h-screen bg-[#23272F] dark:bg-[#23272F]`}> 
          <img src={homeImage} alt="" className={`w-full h-screen object-cover opacity-20`}/>
        </div>
        <div className='pt-20 flex flex-col gap-8 relative'>
          <div className='z-10 flex flex-col gap-8'>
            <h2 className='text-7xl font-bold px-[400px]'>Choose your next movie and schedule to watch it</h2>
            <p className='text-xl px-[500px]'>Communicate with cinephile people, see IMDB score of movies, genre, ... , and choose your next movie</p>
            <div className='flex gap-4 justify-center items-center'>
              <Secondbtn title={"View plans"} 
              customFunction={() => handleClickScroll('home-pricing')} size={'medium'} clickAnimation={true}/>
              <Mainbtn title={"Join Now !"} 
              customFunction={() => {}} size={'medium'} clickAnimation={true}/> 
            </div>
          </div>

        </div>
        <div  className='absolute right-0 -top-2'>{<img onLoad={(target)=> {svgDivOnLoad (target)}} className='w-[475px] opacity-0' src={theme == 'dark' ? svg2dark : svg2} alt="" />}</div>
        <div  className='absolute right-0 -top-2'>{<img onLoad={(target)=> {svgOnLoad (target , 'up')}} className='w-[475px] opacity-0' src={theme == 'dark' ? svg2dark : svg2} alt="" />}</div>
      </div>

      <section id='home-whatIsBebin' className='flex flex-col w-full relative gap-14 justify-center bg-[#F7F8F9] dark:bg-[#191B21] py-32'>
        <p  className={`text-5xl font-semibold ${whatIsVisible == true ? ('animate-[wiggle_2s] opacity-100') : 'opacity-0'}`}>What is Be<span className='text-amber-500'>Bin</span> ?</p>
          <div className='overflow-hidden relative' >
            <div className={`relative h-[600px] left-[50%] overflow-hidden ${whatIsVisible == true ? ('animate-[wiggleLeft_5s] opacity-100') : 'opacity-0'}`}>
              <div className='absolute w-full h-full z-20 bottom-0 left-0 bg-gradient-to-r from-[#F7F8F9] to-[#ffffff00] dark:from-[#191B21] dark:to-[#ffffff10]'></div>
              <img src={movies1} className={` object-cover `} alt="" />
            </div>
            <div ref={whatIsRef} className={`w-1/2 tracking-wide text-center absolute top-28 left-8 flex flex-col gap-6 ${whatIsVisible == true ? ('animate-[wiggleRight_3s] opacity-100') : 'opacity-0'}`}>
              <p  className={`text-3xl font-semibold px-8`}>
              BeBin is a platform that you can explore movies , follow critics & people, see their wat's about movies
              and plan your next movie to see
              <br /></p>
              <span className='font-light text-lg px-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui dolor tempora, quis recusandae sed quasi porro provident assumenda voluptate?</span>
              <div className='mt-4'>
                <Secondbtn title={"Read more"} customFunction={() => {}} size={'medium'} clickAnimation={true}/>
              </div>
            </div>
          </div>
      </section>

      <section id='home-features' className='flex flex-col gap-14 justify-center bg-[#F7F8F9] dark:bg-[#23272F] py-36'>
        <p className={`text-5xl font-semibold ${sec11IsVisible == true ? ('animate-[wiggle_2s] opacity-100') : 'opacity-0'}`}>Features</p>
        <div className='flex items-center justify-start gap-24 px-24' >
          <img ref={sec11Ref} src={theme == 'dark' ? sec2svg1dark : sec2svg1} className={`w-[450px]  ${sec11IsVisible == true ? ('animate-[wiggleLeft_2s] opacity-100') : 'opacity-0'}`} alt="" />
          <div className={`tracking-wide text-start pr-4pl-40 flex flex-col gap-3 ${sec11IsVisible == true ? ('animate-[wiggle_2s] opacity-100') : 'opacity-0'}`}>
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
              <Secondbtn title={"Read more"} customFunction={ () => {}} size={'medium'} clickAnimation={true}/>
            </div>
          </div>
          <img ref={sec12Ref} src={theme == 'dark' ? sec2svg2dark : sec2svg2} className={`w-[450px]  ${sec12IsVisible == true ? ('animate-[wiggleRight_2s] opacity-100') : 'opacity-0'}`} alt="" />
          
        </div>
      </section>
      <section  id='home-pricing' className=''>


        <Pricing />


      </section>
      <section id='home-critics' className='relative flex flex-col gap-10 bg-[#F7F8F9] dark:bg-[#23272F] py-36'>
        
        {/* <div className='absolute -left-[6%] w-[110%] h-[130%] bg-amber-500 opacity-90 dark:opacity-70 rotate-2 z-0'></div> */}
        <p className='text-5xl font-semibold'>Our top critics</p>
        <div className='px-32 z-20'>
          {criticsComp}
        </div>

      </section>
    </div>
  )
}

export default Home;

