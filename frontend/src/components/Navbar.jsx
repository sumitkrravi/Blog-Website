import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        item.classList.add('hovered');
      });

      item.addEventListener('mouseout', () => {
        item.classList.remove('hovered');
      });
    });

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener('mouseover', () => {});
        item.removeEventListener('mouseout', () => {});
      });
    };
  }, []);

  return (
    <>
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div>
          <Link to="/"><h2>BlogOasis</h2></Link>
        </div>
        <div>
          <ul>
            <li><Link to="/blog">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="#authors">Authors</a></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/contribute">Contribute</Link></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div>
          <Link to="/createblog" className="btn">Create Blog</Link>
          <Link to="/signup" className="btn">Signup</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
