import React from 'react'
import './header.css'
import { useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation()
    console.log(location)

    return (
        <div>
            <div className='header-container'>
                <h1 className='header-title'>My Portfolio</h1>
                <div>
                    <ul className='header-nav'>
                        <li><a href="/" className={location.pathname === '/' ? 'current-path' : ''}>Home</a></li>
                        <li><a href="/about-me" className={location.pathname === '/about-me' ? 'current-path' : ''}>About Me</a></li>
                        <li><a href="/contact-me" className={location.pathname === '/contact-me' ? 'current-path' : ''}>Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header