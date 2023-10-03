import React from 'react'
import { ShimmerUIButton} from 'shimmer-ui-effect';
const LoaderCard = () => {
  return (
    <>
    <div className='mb-10'>
      <ShimmerUIButton borderRadius={4} height={18} width={170} />
      <div className="flex overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'thin' }}>
        <div className='flex gap-5'>

          {Array(10)
          .fill("")?.map((element) => (
            <div className="h-100">
                <ShimmerUIButton borderRadius={4} height={130} width={210} /> {/* Adjust height and width */}
            </div> 
           
          ))}
    </div>
    </div>
    </div>

    </>
  )
}

export default LoaderCard