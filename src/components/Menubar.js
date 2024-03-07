import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = ({drop}) => {
  return (
    <ul className='absolute  border-4 flex flex-col ms-2 bg-white text-gray-500 text-sm '>
        <li className='flex flex-col   w-64  bg-white gap-4'>
            {
                drop.map((item)=>{
                    return <li className=' w-full  hover:text-pink-400 text-start'>
                        {
                            <Link to='/' key={item.id}>{item.title}</Link>
                        }
                    </li>
                })
            }
        </li>
    </ul>
  )
}   

export default Menubar
