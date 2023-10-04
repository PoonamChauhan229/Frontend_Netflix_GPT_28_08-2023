import React from 'react';
import { useSelector } from 'react-redux';
import WatchCard from './WatchCard';

const WatchContainer = ({ title, watchlistpropsdata }) => {
  console.log(title, watchlistpropsdata);

  return (
    <div className='mt-[50px]'>
      <div className='px-6'>
        <h1 className='text-lg font-bold py-4 text-white'>{title}</h1>
        {watchlistpropsdata !== null && watchlistpropsdata.length > 0 ? (
          <div className='flex overflow-x-auto overflow-y-hidden' style={{ scrollbarWidth: 'thin' }}>
            {watchlistpropsdata.map((element) => (
              <WatchCard key={element.id} {...element} />
            ))}
          </div>
        ) : (
          <p className='text-white'>{`No items in ${title}.`}</p>
        )}
      </div>
    </div>
  );
};

export default WatchContainer;
