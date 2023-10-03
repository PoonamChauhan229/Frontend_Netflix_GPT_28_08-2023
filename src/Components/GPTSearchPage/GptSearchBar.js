import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../../utilis/languageConstants'
import axios from 'axios'
import {URL} from '../../utilis/constants'
import { addGptSearchData } from '../../utilis/redux/gptSlice'
export const GptSearchBar = () => {
  const dispatch=useDispatch()
  const langKey=useSelector((store)=>store.config.lang)
  const searchGptText=useRef(null)


  const handleGptSearchClick=async()=>{
    console.log(searchGptText.current.value)
    const response=await axios.post(`${URL}/getopenaidata`,{
      gptQuery:searchGptText.current.value
    },
    {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }          
    })
    console.log(response.data)
    dispatch(addGptSearchData(response.data))    
  }
  return (
    <div className=' flex justify-center'>
  
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input type="text" ref={searchGptText} className='p-4 m-4 col-span-9'
            placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
            onClick={handleGptSearchClick}
            >
              {lang[langKey].search}</button>
        </form>
    </div>
  )
}
