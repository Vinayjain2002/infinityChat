import React from 'react'
import { AllOptions } from '../../../components/AllOptions.tsx'
import { FriendRequestInfo } from '../components/FriendRequestInfo.tsx'

export const FriendRequests = () => {
  return (
    <div>
      <div className='flex'>
        <div className='h-screen w-[80px] border border-[2px] flex items-center justify-center'>
          <AllOptions />
        </div>
        <div className='w-full'>
          <FriendRequestInfo />
        </div>
      </div>
    </div>
  )
}
