import React from 'react'
import { useSelector } from 'react-redux'
import WatchCard from './WatchCard'

const WatchContainer = ({title,watchlistpropsdata}) => {
    console.log(title,watchlistpropsdata)
  return (
    <div  className='mt-[50px]'  >
    <div className="px-6">
      <h1 className="text-lg font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'thin' }}>
        {
            watchlistpropsdata?.map((element)=>(
                <WatchCard {...element}/>

            ))
        }
      </div>
    </div>
    </div>
  )
}

export default WatchContainer