import React from 'react'
import Appoiment from '../components/home/Appoiment'
import Clients from '../components/home/Costumers'
import MainBanner from '../components/home/MainBanner'
import Services from '../components/home/Services'

function Home() {
  return (
    <div>
        <MainBanner/>
        <Services/>
        <Clients/>
        <Appoiment/>
    </div>
  )
}

export default Home