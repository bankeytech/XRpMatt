import React from 'react'
import Tgbox from "../assets/tgbox.png"
import Twitter from "../assets/xbox.png"
import BuyMatt from "../assets/buymatt.png"
import DexTool from "../assets/dextools.png"
import DexScreener from "../assets/dexscreener.png"


function Header() {
  return (
    <div className="fixed lg:bottom-20 lg:gap-4 gap-2 bottom-10 lg:w-[37%] w-[90%]
    flex items-center justify-center p-3 lg:p-4 rounded-3xl border-[#FFFCD3]/50
     border-[0.1px] z-50 bg-[#212121]/40 backdrop-blur-xl l-mt-40 px-6 lg:px-0 ">
      <a href="#" target="_blank" rel="noreferrer" className="transition-transform 
      duration-200 hover:scale-110 active:scale-95 lg:flex hidden">
        <img src={Tgbox} alt="img" className="lg:w-16 w-[15%]"/>
      </a>
      <a href="#" target="_blank" rel="noreferrer" className="transition-transform 
      duration-200 hover:scale-110 active:scale-95 lg:flex hidden">
        <img src={Twitter} alt="img" className="lg:w-16 w-[15%]"/>
      </a>
      <a href="#" target="_blank" rel="noreferrer" className="transition-transform 
      duration-200 hover:scale-110 active:scale-95 lg:flex hidden">
        <img src={BuyMatt} alt="img" className="lg:w-36 w-[38%]" />
      </a>
      <a href="#" target="_blank" rel="noreferrer" className="transition-transform 
      duration-200 hover:scale-110 active:scale-95 lg:flex hidden">
        <img src={DexTool} alt="img" className="lg:w-16 w-[15%]" />
      </a>
      <a href="#" target="_blank" rel="noreferrer" className="transition-transform 
      duration-200 hover:scale-110 active:scale-95 lg:flex hidden">
        <img src={DexScreener} alt="img" className="lg:w-16 w-[15%]"/>
      </a>

       <img src={Tgbox} alt="img" className="lg:w-16 w-[15%] lg:hidden"/>
      
       <img src={Twitter} alt="img" className="lg:w-16 w-[15%] lg:hidden"/>
      
       <img src={BuyMatt} alt="img" className="lg:w-36 w-[38%] lg:hidden" />
      
       <img src={DexTool} alt="img" className="lg:w-16 w-[15%] lg:hidden" />
      
       <img src={DexScreener} alt="img" className="lg:w-16 w-[15%] lg:hidden"/>
         
    </div>

    // mobile

    // <div className="fixed lg:bottom-20 lg:gap-4 gap-2 bottom-10 lg:w-[37%] w-[90%]
    // flex items-center justify-center p-3 lg:p-4 rounded-3xl border-[#FFFCD3]/50
    //  border-[0.1px] z-50 bg-[#212121]/40 backdrop-blur-xl l-mt-40 px-6 lg:px-0 ">
     
    //     <img src={Tgbox} alt="img" className="lg:w-16 w-[15%]"/>
      
    //     <img src={Twitter} alt="img" className="lg:w-16 w-[15%]"/>
      
    //     <img src={BuyMatt} alt="img" className="lg:w-36 w-[38%]" />
      
    //     <img src={DexTool} alt="img" className="lg:w-16 w-[15%]" />
      
    //     <img src={DexScreener} alt="img" className="lg:w-16 w-[15%]"/>
         
    // </div>
  )
}

export default Header