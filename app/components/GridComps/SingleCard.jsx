import React from 'react'


function SingleCard({name, credentials, image, url}) {

    const openNewTab = (url) => {
        const newTab = window.open(url, _blank);
        if (newTab) newTab.focus();
      };


  return (
    <>
    <div className='mx-auto flex gap-10 flex-col items-center'>
    <div className='h-40 w-40 rounded-full shadow-lg shadow-gray-950 bg-contain transition-transform duration-300 ease-in hover:scale-105'>

    <a href={url} target='_blank' rel='noopener noreferrer'>
          <img src={image} alt={name} className='rounded-full object-cover h-full w-full' />
        </a>
    </div>
    <div className='flex flex-col items-center'>
        <div className='text-xl font-medium'>{name}</div>
        <div>{credentials}</div>
    </div>
    </div>
    </>
    
  )
}

export default SingleCard