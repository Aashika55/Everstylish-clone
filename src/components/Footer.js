import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi"; 



function Footer() {
  return (
    <div className='bg-gray-100 gap-4 p-20'>
    <div className=" flex flex-row pl-20  mr-32 ">
            <ul className='flex flex-col left-px text-xs text-gray-500'>
                <li className='flex flex-row gap-2'> <IoCallOutline className='m-1' />8882188858</li>
                <li className='flex flex-row gap-2'> <TfiEmail className='m-1'/>care@everstylish.com</li>
            </ul>
    
       
        <div className='mr-20 flex flex-col gap-8 pl-40'>
            <h2><b>Categories</b></h2>
            <button>
            <ul className='flex flex-col text-sm gap-4 text-gray-500'>
                <li className='flex flex-row gap-4'>All Jewellery</li>
                <li className='flex flex-row gap-2'> Rings</li>
                <li className='flex flex-row gap-2'> Earings</li>
                <li className='flex flex-row gap-2'> Neckpieces</li>
                <li className='flex flex-row gap-2'> Barcelets and Anklets</li>
            </ul> 
            </button>

        </div>
        <div className='mr-20 flex flex-col gap-8'>
            <h2><b>Information</b></h2>
            <button>
            <ul className='flex flex-col text-sm gap-4 text-gray-500'>
                <li className='flex flex-row gap-2'>About Us</li>
                <li className='flex flex-row gap-2'>Contact Us </li>
                <li className='flex flex-row gap-2'> Terms & Conditions</li>
                <li className='flex flex-row gap-2'> Delivery & Returns </li>
                <li className='flex flex-row gap-2'> Privacy Policy</li>
            </ul> 
            </button> 

        </div>
        <div className=' mr-20 flex flex-col gap-8'>
            <div><b>Quik Link</b></div>
            <button>
            <ul className='flex flex-col text-sm gap-4 text-gray-500'>
                <li className='flex flex-row gap-2'>My Account</li>
                <li className='flex flex-row gap-2'>Orders Tracking </li>
                <li className='flex flex-row gap-2'> Questions</li>
                </ul>
                </button> 

        </div>

        <div className='text-gray-400 text-xs '>
            <h3>Subscribe to our newsletter and get</h3>
               <p> updates on latest designs and sales</p>
               

              <div className='border-2 mt-4 p-2 rounded-full text-white  '>
            <input className=' p-1 outline-none' type='email '></input>
            <button className='oval-button rounded-full bg-black p-3 hover:bg-pink-400'><b>Subscribe</b></button>
      
            </div>
            <div className='p-4 mt-4'>
            <img src='https://everstylish.com/pub/media/wysiwyg/payment2.png' alt=''></img>
        </div>

        </div>

        
        


        </div>
        <div className="bg-white  p-10 m-9">
            <div className='text-gray-500 '>About
            
            </div>

        </div>

        
        </div>
        
        
        
      

     
    
    
  )
}

export default Footer