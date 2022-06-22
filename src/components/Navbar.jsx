import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="nav">
        <label htmlFor="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <div className="menu">
            <a href="#">HOME</a><a href="#">PAGES</a><a href="#">PORTFOLIO</a><a href="#">BLOG</a><a href="#"></a><a href="#">ELEMENTS</a><a href="#">FEATURES</a>
        </div>
    </div>
    </>
  )
}

export default Navbar