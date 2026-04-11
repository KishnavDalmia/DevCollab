import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='mt-12 text-white pb-12'>
        <div className='flex gap-5'>
            <h3 className='font-medium text-2xl'>Your Projects</h3>
            <button className='flex gap-1 text-neutral-900 font-medium hover:bg-neutral-200 bg-white rounded-md shadow-md hover:shadow-lg shadow-white/20 px-4 py-2 border border-black cursor-pointer'>
            <img src="/add.svg" alt="" className='w-6 h-6' /><span>Create New</span>
            </button>
        </div>
        <div className='flex flex-wrap gap-8'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Cards