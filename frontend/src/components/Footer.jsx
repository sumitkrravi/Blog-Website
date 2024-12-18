import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <>
    <footer>
        <div className="footer-section">
                <p>Your ultimate destination for all things blogging!</p>
            <div className="link-section">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Help</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
                <a href="">Cookie Policy</a>
            </div>
            <div className="copy-right-section">
                <p>© 2024 BlogOasis | All rights reserved</p>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer