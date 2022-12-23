import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-0  px-4'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Booking</li>
                    <li className='py-1'>Travel</li>
                    <li className='py-1'>Flights</li>
                    <li className='py-1'>Cruises</li>
                    <li className='py-1'>Ground</li>
                </ul>
            </div>
            <div>
            <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Tours</li>
                    <li className='py-1'>Refunds</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Term</li>
                    <li className='py-1'>Policy</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                <p>Subscribe to our Newsletter.</p>
                <p>Latest deals , article and resources sent to your inbox</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4 mt-3' type='email' placeholder='Enter Email....'/>
                    <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1400px] mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='font-bold uppercase py-4'>2022, Explore, All rights Reserved</p>
            <div className='flex justify-between sm:w-[300px] text-2xl pt-4'>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <TiSocialPinterest/>
            </div>
        </div>
    </div>
  )
}

export default Footer