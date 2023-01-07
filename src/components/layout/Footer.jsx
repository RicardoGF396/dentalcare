import React from 'react'
import Logo from '../../assets/logo.svg'
import MapIcon from '../../assets/map.svg'
import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Whatsapp from '../../assets/whatsapp.svg'

function Footer() {
  return (
    <div className='mt-12 px-5'>
        <div className='flex flex-col gap-y-12'>
            <div >
                <img src={Logo} alt='logo' className='w-[150px] mb-4' />
                <p className='w-[250px] '>Somos expertos en el cuidado de tu sonrisa.</p>
            </div>
            <div className='flex flex-col gap-y-6'>
                <div className='flex gap-x-6 pr-4'>
                    <img src={MapIcon} alt="map" />
                    <p>Emiliano Zapata 616, Centro
37370. León, Gto. México</p>
                </div>
                <div className='flex gap-x-6 pr-4'>
                    <img src={Phone} alt="phone" className='w-[35px] ' />
                    <p>+52 477 4715263</p>
                </div>
                <div className='flex gap-x-6 pr-4'>
                    <img src={Email} alt="email" className='w-[35px] ' />
                    <p>hola@dentalcare.com</p>
                </div>
            </div>

            <div className='flex gap-x-4'>
                <img src={Facebook} alt="facebook" />
                <img src={Instagram} alt="instagram" />
                <img src={Whatsapp} alt="whatsapp" />
            </div>

            <div className='pb-12'>
                <p>©2022 RIDO Web Design - Dentalcare </p>
            </div>
        </div>
    </div>
  )
}

export default Footer