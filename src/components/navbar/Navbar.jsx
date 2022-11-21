import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar_container">
                <span className="navbar_logo">FastBooking</span>
                <div className="navbar_items">
                    <button className="navbar_items_btn">Register</button>
                    <button className="navbar_items_btn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
