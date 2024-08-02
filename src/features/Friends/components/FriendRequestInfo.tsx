import React, { useState } from 'react';
import connection from '../../../assets/images/connection.jpeg';
import { RecievedRequests } from './RecievedRequests.tsx';
import { SentRequests } from './SentRequests.tsx';

export const FriendRequestInfo = () => {
  const [activeTab, setActiveTab] = useState('received');
  const [animate, setAnimate] = useState(false);

  const handleTabChange = (tab: string) => {
    setAnimate(true);
    setActiveTab(tab);
    setTimeout(() => {
      setAnimate(false);
    }, 300); // adjust the timeout to match the animation duration
  };

  return (
    <div className='w-full h-full'>
      <div className='w-full'>
        <div className='flex flex-col'>
          {/* here we are gonna to define the request Sections */}
          <div className='text-2xl font-semibold px-3 py-3'>
            Requests
          </div>
          <div className='flex justify-between w-full'>
            <div
              className={`font-medium text-md w-1/2 flex items-center justify-center ${
                activeTab === 'received' ? 'border-b-4 border-blue-300 ' : ''
              }`}
              onClick={() => handleTabChange('received')}
            >
              <p className='text-lg text-gray-700'>Recieved</p>
            </div>
            <div
              className={`font-medium text-md w-1/2 flex items-center justify-center ${
                activeTab === 'sent' ? 'border-b-4 border-blue-300 ' : ''
              }`}
              onClick={() => handleTabChange('sent')}
            >
              <p className='text-lg text-gray-700'>Sent</p>
            </div>
          </div>
          <div className='mt-4'>
            <hr />
          </div>
          {/* here we need to place the data */}
          <div
            className={`transition-transform duration-300 ${
              animate ? 'translate-x-0' : 'translate-x-0'
            }`}
          >
            {activeTab === 'received' ? (
              <RecievedRequests />
            ) : (
              <SentRequests />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};