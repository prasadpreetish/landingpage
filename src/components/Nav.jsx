import React from "react";

const Toggle = ()=>{
  
}
function Nav(){
    return <nav>
    <div className="logo--container" ><a href=
  "index.html"><img src="https://www.themezaa.com/html/pofo/images/logo@2x.png" alt="logo" /></a></div>
  <div className="hamburger" onClick={Toggle} >
    <div className="stick"></div>
    <div className="stick"></div>
    <div className="stick"></div>
  </div>
  <div className="nav--menu">
    <a href='#' className="nav--menu--items">HOME</a>
    <a href='#' className="nav--menu--items">PAGES</a>
    <a href='#' className="nav--menu--items">PORTFOLIO</a>
    <a href='#' className="nav--menu--items">BLOG</a>
    <a href='#' className="nav--menu--items">ELEMENTS</a>
    <a href='#' className="nav--menu--items">FEATURES</a>
  </div>
  <div id="search--holder"><i class="fas fa-search" aria-hidden="true"></i></div>
  <div id="social--media--icons--holder">
    <a href="https://facebook.com"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
    <a href="https://twitter.com"><i class="fab fa-twitter" aria-hidden="true"></i></a>
    <a href="https://dribble.com"><i class="fab fa-dribbble" aria-hidden="true"></i></a>
  </div>
  </nav>
}

export default Nav;