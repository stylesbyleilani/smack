import React from 'react'
import ResumeContainer from './ResumeContainer'

const Resume = () => {
  return (
    <div className=' p-10 flex flex-col items-center gap-2 justify-center'>
        <div className='bg-green-200 flex justify-center  text-purple-600 w-max  p-2 rounded-md border-[2px] border-green-700 '>
            <h1 className='font-bold  text-sm text-center'>RESUME GENERATOR</h1>
        </div>

        <h1 className='text-center font-semibold tracking-wider text-3xl text-gray-900'>Create a <span className='text-purple-500'>Beautiful Resume </span>in 2 mins</h1>
        <p className='mt-3'>For best result all fields are required except checkboxes or disabled fields</p>

        <ResumeContainer/>
    </div>
  )
}

export default Resume