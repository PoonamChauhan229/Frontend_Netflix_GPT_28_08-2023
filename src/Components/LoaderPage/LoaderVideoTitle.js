import React from 'react';
import { ShimmerUIButton,ShimmerUIText} from 'shimmer-ui-effect';

const LoaderVideoTitle = () => {
  return (
    <div className='absolute pt-[17%] px-8 text-white bg-gradient-to-r from-black h-screen'>
     <ShimmerUIButton borderRadius={4} height={10} width={170} /> {/* Adjust height and width */}
     <ShimmerUIText line={3} gap={15} /> 
      <div className='flex gap-3'>
        <ShimmerUIButton borderRadius={4} height={32} width={130} /> {/* Adjust height and width */}
        <ShimmerUIButton borderRadius={4} height={32} width={130} /> {/* Adjust height and width */}
      </div>
    </div>
  );
};

export default LoaderVideoTitle;
