import React from 'react'
import Appoiment from '../components/layout/Appoiment'
import Clients from '../components/home/Costumers'
import MainBanner from '../components/home/MainBanner'
import Services from '../components/home/Services'
import Family from "../assets/family.png";


function Home() {
  return (
    <div>
        <MainBanner/>
        <Services/>
        <Clients/>
        <div className='mt-20 px-4'> 
        <img src={Family} alt="familia" className="rounded-t-2xl w-full mb-2" />
        <Appoiment/>
        </div>
    </div>
  )
}

export default Home