import React, { useState } from 'react'
import {FaSearch, FaUser} from 'react-icons/fa'
import { VscHeart } from "react-icons/vsc";
import { CgShoppingBag } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi"; 
import {myaccountData,collectionData, typeData} from "../utils/data"
import Menubar from './Menubar';


function Header() {
  const [isHovering,setHovering] = useState(false);
  const [isSecHovering,setSecHovering] = useState(false);
  const [isThirdHovering,setThirdHovering] = useState(false);


  const setOne =()=>{
    setHovering(true)
  }
  const setFalse=() =>{
    setHovering(false)
  };

  const setTwo =()=>{
      setSecHovering(true)
    }
  const setSecFalse=() =>{
      setSecHovering(false)
  };
  const setThird =()=>{
    setThirdHovering(true)
  }

  const setThirdFalse=() =>{
    setThirdHovering(false)
};

 
  return (
      
    <div className='w-full mx-auto text-front-family-poppins '>
        <div>
        <div className="bg-gray-100 gap-4 p-1">
            <ul className='flex flex-row gap-4 mx-28 text-gray-400 text-sm '>
                <li className='flex flex-row gap-2 hover:text-red-500'> <IoCallOutline className='m-1' />8882188858</li>
                <li className='flex flex-row gap-2 hover:text-red-500'> <TfiEmail className='m-1'/>care@everstylish.com</li>
            </ul>
            </div>
        </div>
    <nav className='flex  flex-row p-px'>
      
      <div className="px-2.5 mx-28 w-80 m-4">
      <img src="https://everstylish.com/pub/media/logo/default/everstylish_logo_pink_horizontal.png" alt=""/> 
      </div>
      <button>
      <ul className='flex  flex-row gap-10 m-2 p-5 text-grey-700 text-xs text-bold  '>
        
        <li className='hover:text-pink-400'>HOME</li>
        <li className='hover:text-pink-400'>ALL JEWELRY</li>
        <li className='hover:text-pink-400'>WHAT'S NEW?</li>

        
       <li onMouseEnter={setOne} onMouseLeave={setFalse}>
        <li className='hover:text-pink-400'>TYPE</li>
        {isHovering && (
          <div className='border-1 flex  w-full'>
            <Menubar drop={typeData} />
          </div>

        )}
        </li>
        <li onMouseEnter={setTwo} onMouseLeave={setSecFalse}>
        <li className='hover:text-pink-400'>COLLECTION</li>
        {isSecHovering && (
          <div>
            <Menubar drop={collectionData} />
          </div>

        )}
        </li>
        
        
        <li className='hover:text-pink-400'>SANJOYA</li>
        
        
      </ul>
      </button>
      
      <div className='flex  flex-row gap-2 m-2 p-5 pl-20 text-gray-400 text-lg '>
        
        
      <FaSearch className='m-1 hover:text-pink-400' />
      

      {/* <FaUser className='m-1 hover:text-pink-400' /> */}

      <div className='m-1' onMouseEnter={setThird} onMouseLeave={setThirdFalse}><FaUser/>
        {isThirdHovering && (
          <div>
            <Menubar drop={myaccountData} />
          </div>
        )
}
        
          </div>

      
      <VscHeart className='m-1 hover:text-pink-400'/>
      <CgShoppingBag className='m-1 hover:text-pink-400'/>
      
      
      </div>
    </nav>
    
</div>
  
  
  )
}

export default Header