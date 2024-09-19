import React from 'react'
import { AllOptions } from '../../../components/AllOptions.tsx'
import { ChattingUsers } from '../components/ChattingUsers.tsx'
import { ChattingMessagesInfo} from '../components/ChattingMessagesInfo.tsx'
export const Chatting = () => {
  return (
    <div className='w-full h-full min-w-screen min-h-screen'>
      <div className='w-full flex'>
        <div className='h-screen w-[80px] border border-[2px] flex items-center justify-center'>
          <AllOptions />
        </div>
        <div className='max-h-screen overflow-y-scroll'>
          <ChattingUsers />
        </div>
        <div className='flex-1'>
          <ChattingMessagesInfo />
        </div>
      </div>
    </div>
  )
}
