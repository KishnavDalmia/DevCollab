import React from 'react'

const Card = () => {
  return (
    <div className='border border-neutral-800 rounded-md px-5  mt-12 py-5 w-150 shadow-md hover:shadow-xl shadow-white/20 hover:bg-neutral-900 transition ease-in-out duration-200'>
        <div className='flex flex-col items-start gap-6 py-3 border-b border-neutral-800'>
            <a href="/" className='text-white font-medium text-lg hover:underline'>
                DevCollab
            </a>
            <p className='text-neutral-300 font-medium'>A collaborative platform for developers</p>
        </div>
        <div className='flex pt-4 gap-6'>
            <span className='text-neutral-400 text-sm'>5 Projects</span>
            <span className='text-neutral-400 text-sm'>4 Members</span>
        </div>
    </div>
    
  )
}

export default Card