import React from 'react';

function ThemeCard({name, image}) {
  return (
    <div className='mx-auto flex gap-10 flex-col items-center'>
      <div className='w-80 h-60 rounded-xl bg-white shadow-lg shadow-gray-400 border-white transition-transform duration-300 ease-in hover:scale-105'>
        {/* Content of the card goes here */}
        {/* image */}
        <div className='flex p-5 gap-4 flex-col justify-center items-center'>
        <img src={image} alt={name} className='object-cover w-40 h-40' />
        <div className='flex justify-center items-end text-xl font-bold'>{name}</div>
        </div>
        
      </div>
    </div>
  );
}

export default ThemeCard;

