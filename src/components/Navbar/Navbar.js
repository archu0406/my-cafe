import React, {useState} from 'react'
import {FaMugHot, FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState(false)
    const handleNav = () => setNav(!nav)

    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'navbar navbar-bg' : 'navbar'}>
           <div className="container">
               <div><FaMugHot size={40} style={{marginLeft: '4px'}} />My Cafe</div>
               <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                   <li><Link to='/'>Home</Link></li>
                   <li><Link to='/'>About</Link></li>
                   <li><Link to='/'>Menu</Link></li>
                   <li><Link to='/'>Order Online</Link></li>
                   <li><Link to='/Contact'>Contactus</Link></li>
               </ul>
               <div className="bars" onClick={handleNav}>
                   {nav ? (<FaTimes size={20} style={{color: '#ffffff'}} />) : (<FaBars size={20} />)}
               </div>
           </div>
        </div>
    )
}

export default Navbar;