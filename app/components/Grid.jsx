"use client"
import React from 'react'
import SingleCard from './GridComps/SingleCard'


function Grid() {
  return (
    <div className='relative  w-screen overflow-x-hidden'>
        <div className='flex p-20 flex-col gap-12'>
        <h1 className="text-5xl font-extrabold" id="faq">Our Team</h1>
        <div className='flex flex-wrap gap-12 flex-rows'>

        
        <SingleCard name="Harsh Raj" credentials="Lead Organiser" image={'./gridimages/harshraj.png'} url={"https://www.linkedin.com/in/harshraj2717/"}/>
        <SingleCard name="Harsh Deep Gupta" credentials="Lead Organiser" image={'./gridimages/harshdeep.jpeg'} url={"https://www.linkedin.com/in/harsh-deep-313ba6248"}/>
        <SingleCard name="Ayush Kumar" credentials="GitHub Campus Expert" image={'./gridimages/ayushkumar.jpeg'} url={"https://www.linkedin.com/in/ayush-kumar-984443191/"}/>
        <SingleCard name="Prachi Agarwal" credentials="Content Lead + co-host" image={'./gridimages/prachi.jpeg'} url={"https://www.linkedin.com/in/prachi-agarwal-000378230/"}/>
        <SingleCard name="Priyanshi Agarwal" credentials="Design Lead" image={'./gridimages/priyanshi.jpg'} url={"https://www.linkedin.com/in/priyanshi-agrawal-a428aa201/"}/>
        <SingleCard name="Ashutosh Gupta" credentials="Tech" image={'./gridimages/ashu.jpg'} url={"https://www.linkedin.com/in/ashutooshgupta/"}/>
        </div>

        <div className='flex flex-wrap gap-12 flex-rows'>
        <SingleCard name="Aadhyaa Pahariya" credentials="Content" image={'./gridimages/aadhya.jpeg'} url={"https://www.linkedin.com/in/aadhyaa-pahariya-9181a9222/"}/>
        <SingleCard name="Amrita yadav" credentials="Content" image={'./gridimages/amrita.jpeg'} url={"https://www.linkedin.com/in/amrita-yadav-521523201/"}/>
        <SingleCard name="Neelesh Maurya" credentials="Design" image={'./gridimages/neelesh.jpeg'} url={"https://www.linkedin.com/in/neeleshmaurya/"}/>
        <SingleCard name="Jigisha Baliyann" credentials="Design" image={'./gridimages/Jigisha.png'} url={"https://in.linkedin.com/in/jigisha-baliyann"}/>  
        <SingleCard name="Neha Rajvanshi" credentials="Design + Social Media" image={'./gridimages/neha.jpeg'} url={"https://www.linkedin.com/in/neha-rajvanshi-a180b0214/"}/>     
        </div>
        </div>
    </div>
  )
}

export default Grid