import React from "react";
import LoaderCard from "./LoaderCard";

const LoaderList = () => {
 
  return (
    <div className='bg-black'>
      <div className='-mt-52 px-8 relative z-20'>
      {Array(5)
          .fill("")?.map((element) => (
            <LoaderCard/> 
           
          ))}
      
    </div>     
    </div>
  );
};

export default LoaderList;
