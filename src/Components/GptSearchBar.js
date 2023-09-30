import React from 'react'

export const GptSearchBar = () => {
  return (
    <div className='pt-[20%]'>
        <form action="" className='w-1/2 p-6 bg-black grid grid-cols-12'>
            <input type="text" className='p-4 m-4 col-span-6' name="" id="" placeholder='What would you like to watch Today?'/>
            <button className='col-span-6py-2 px-4 bg-red-700 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}
