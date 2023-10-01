import { URL } from '../utilis/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addPage1,addPage2,addPage3,addPage4,addPage5 } from '../utilis/redux/allDataSlice';

const useHomeAll= () => {
    const dispatch=useDispatch()
    const token=localStorage.getItem('token')
    //console.log("MoviesToken",token)

    useEffect(() => {
      if(token){
        getAllList();
      }
    }, []);
  
    const getAllList = async () => {
      try {
        const pagemovietv = await axios.get(`${URL}/getalllist`);
        const data = pagemovietv.data;
        //console.log(pagemovietv)
  
        // Store the first 15 items in addPage1
        dispatch(addPage1(data.slice(0, 15)));
  
        // Store the next 15 items in addPage2
        dispatch(addPage2(data.slice(15, 30)));
  
        // Store the next 15 items in addPage3
        dispatch(addPage3(data.slice(30, 45)));
  
        // Store the next 15 items in addPage4
        dispatch(addPage4(data.slice(45, 60)));
  
        // Store the remaining items in addPage5
        dispatch(addPage5(data.slice(60)));
      } catch (error) {
        console.error(error);
      }
    }
  }
  export default useHomeAll;
