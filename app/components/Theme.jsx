"use client"
import React from 'react';
import ThemeCard from './ThemeComps/ThemeCard';


function Theme() {
  return (
    <div className=' relative w-screen overflow-x-hidden'>
      <div className='flex p-20 flex-col gap-12'>
      <h1 className="text-5xl font-extrabold" id="faq">Tracks</h1>
        <div className='flex flex-wrap gap-12 flex-rows'>
          <ThemeCard name={"open Innovation"} image={'./ThemeImages/openInno.png'}/>
          <ThemeCard name={"AI ML"} image={'./ThemeImages/ai.png'} />
          <ThemeCard name={"web 3"} image={'./ThemeImages/web3.png'} />
        </div>

        <div className='flex flex-wrap gap-12 flex-rows'>
          <ThemeCard name={"Health Care"} image={'./ThemeImages/health.png'} />
          <ThemeCard name={"Edu-tech"} image={"./ThemeImages/edutech.png"} />
          <ThemeCard name={"FinTech"} image={"./ThemeImages/fintech.png"} />
        </div>
      </div>
    </div>
  );
}

export default Theme;
