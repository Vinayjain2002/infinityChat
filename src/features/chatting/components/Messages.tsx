import React from 'react'
import personImage from '../../../assets/images/person.jpeg'
import dots from '../../../assets/icons/svgIcon/horizontalDots.svg'

export const Messages = () => {
  return (
    <div>
        <div className='flex w-full space-x-2 items-center'>
            <div className='w-[30px] h-[30px] rounded-full overflow-hidden mb-4'>
                <img src={personImage} alt="" className='object-cover' />
            </div>
            <div className='flex flex-col'>
                <div className='flex items-baseline space-x-3'>
                    <div className='font-semibold text-md'>
                        Vinay Jain
                    </div>
                    <div className='text-gray-500 text-xs'>
                        8:16 Pm
                    </div>
                    <div className='w-[12px]'>
                        <img src={dots} alt="" />
                    </div>
                </div>
                <div className='bg-white rounded-b-xl rounded-r-lg px-3 py-2'>
                    Hello Vinay jain. I am felling very Happy to see you
                </div>
            </div>
        </div>
    </div>
  )
}
