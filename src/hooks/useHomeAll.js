import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPage1, addPage2, addPage3, addPage4, addPage5 } from '../utilis/redux/allDataSlice';
import axios from 'axios';
import { URL } from '../utilis/constants';


const useHomeAll = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const alldataPagesData = useSelector((store) => store.allDataPages);
  const { page1, page2, page3, page4, page5 } = alldataPagesData;

  useEffect(() => {
    if (token && (!page1 || !page2 || !page3 || !page4 || !page5)) {
      getAllList();
    } else {
      console.log("No token available or data is already in the store.");
    }
  }, [token, page1, page2, page3, page4, page5]);
  const getAllList = async () => {
    try {
      const pagemovietv = await axios.get(`${URL}/getalllist`);
      const data = pagemovietv.data;

      dispatch(addPage1(data.slice(0, 15)));
      dispatch(addPage2(data.slice(15, 30)));
      dispatch(addPage3(data.slice(30, 45)));
      dispatch(addPage4(data.slice(45, 60)));
      dispatch(addPage5(data.slice(60)));
    } catch (error) {
      console.error(error);
    }
  };
};

export default useHomeAll;
