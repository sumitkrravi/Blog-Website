import React from 'react'
import Login from '../pages/Login'
import Home from '../pages/Home'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className=''>
        <div>
          <Link to="/"><h2 className="">BlogOasis</h2></Link>
        </div>
        <div>
          <ul className=''>
            <li className=''>
              <Link to="/blog">Blog</Link>
            </li>
            <li className=''>
              <a href="#authors">Authors</a>
            </li>
            <li className=''>
              <a href="#about">About</a>
            </li>
            <li className=''>
              <Link to="/contribute">Contribute</Link>
            </li>
            <li className=''>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="">
          <Link to="/createblog" className="">
            Create Blog
          </Link>
          <Link to="/signup" className="">
            Signup
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
