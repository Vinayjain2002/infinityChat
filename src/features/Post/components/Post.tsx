import React from 'react'
import personImage from '../../../assets/images/person.jpeg'
export const Post = () => {
  return (
    <div className='w-full border bg-white px-4 py-3 shadow-md rounded-md'>
        <div  className='flex space-x-4'>
            <div className='w-[50px] h-[50px] rounded-full border-2 border-gray-200 overflow-hidden mt-1'>
                <img src={personImage} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-baseline space-x-2'>
                    <p className='text-lg font-semibold'>Vinay jain</p>
                    <p className='text-xs text-blue-400'>unique Name</p>
                </div>
                <div className='mt-1'>
                    <p className='pr-10'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore vel illo beatae minima quia illum possimus optio molestias unde harum?
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-end mt-4 '>
            <p className='text-sm text-gray-500'>        Posted 3 day ago
            </p>
        </div>
    </div>
  )
}
