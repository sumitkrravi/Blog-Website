import React from 'react'
import Login from '../pages/Login'
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className=''>
        <div>
          <h2 className="">BlogOasis</h2>
        </div>
        <div>
          <ul className=''>
            <li className=''>
              <a href="#">Blog</a>
            </li>
            <li className=''>
              <a href="#">Authors</a>
            </li>
            <li className=''>
              <a href="#">About</a>
            </li>
            <li className=''>
              <a href="#">Contribute</a>
            </li>
            <li className=''>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="">
          <a href="#" className="">
            Create Blog
          </a>
          <a href="#" className="">
            Signup
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
