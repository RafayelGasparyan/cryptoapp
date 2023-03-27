import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom'

 export const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1>
                Coins
                <span className='purple'>Search</span>
            </h1>
        </div>
    </Link>
  )
}

