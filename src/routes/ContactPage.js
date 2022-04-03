import React from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/Menu/Menu';

import img from '../img/4.jpg'

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <Menu bgImg={img}/>
            <Contact />
            <Footer />   
        </>
    )
}

export default ContactPage;