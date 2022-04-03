import React from 'react'
import './Footer.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div class="col">
                    Copyright 2022. All rights reserved. www.mycafe.com
                </div>
                <div class="col2">
                    <h3>Let's Connect</h3>
                    <div className="social">
                        <FaFacebookSquare className='icon' />
                        <FaInstagramSquare className='icon' />
                        <FaTwitterSquare className='icon' />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer