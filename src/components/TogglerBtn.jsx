import React, { useRef, useState } from 'react'


function Mainbtn({ title , customFunction , disabled , clickAnimation , size , borderless = false}) {

    const btn = useRef(null);

    function onBtnClick() {
      if (clickAnimation) {
        btn.current.style.scale = "90%";
        setTimeout(() => {
          btn.current.style.scale = "100%";
        }, 100);
      }
      customFunction();
    }

    const ButtonSize = () => {

      if (size == 'small') {
        return "px-2 py-2 text-sm "
        
      }else if (size == 'medium') {
        return "px-3 py-3 text-medium "
        
      }else if (size == 'large') {
        return "px-4 py-3 text-lg "
      }else {
        return "px-3 py-3 "
      }
      
    }

  return (
    
    <button ref={btn} disabled={disabled && true}  onClick={() => onBtnClick()} className={`cursor-pointer border-2 bg-amber-500 border-amber-500 text-white text-center font-semibold rounded-lg hover:scale-[102%] hover:bg-amber-400 transition-all duration-300 ` + ButtonSize() + " "} type="button"> {title} </button>
  )
}

export default Mainbtn