import React from 'react'
import Postcard from './Postcard';
const Blog = () => {
  return (
    <>
    <div className="blog--container">
        <div className="blog--title--cap--holder">
            <div className="faint--text">
            PUBLISH WHAT YOU THINK
            </div>
            <div className="blog--heading">LATEST BLOGS</div>
            <hr />
        </div>
        <div className="blogpost--scroller">
            <Postcard blogimgsrc="https://www.themezaa.com/html/pofo/images/latest-blog5.jpg" blogdate="25 April 2017  | " blogauth="JAY BENJAMIN" blogtitle="I like the body. I like to design everything to do with the body." link="https://www.themezaa.com/html/pofo/blog-post-layout-01.html"/>
            <Postcard blogimgsrc="https://www.themezaa.com/html/pofo/images/latest-blog6.jpg" blogdate="20 April 2017  | " blogauth="HERMAN MILLER" blogtitle="Styles come and go. Design is a language, not a style." link="https://www.themezaa.com/html/pofo/blog-post-layout-02"/>
            <Postcard blogimgsrc="https://www.themezaa.com/html/pofo/images/latest-blog7.jpg" blogdate="15 March 2017  | " blogauth="HUGH MACLEOD" blogtitle="Recognizing the need is the primary condition for design." link="https://www.themezaa.com/html/pofo/blog-post-layout-03"/>
            <Postcard blogimgsrc="https://www.themezaa.com/html/pofo/images/latest-blog8.jpg" blogdate="10 March 2017  | " blogauth="JAY BENJAMIN" blogtitle="Get in over your head as often and as joyfully as possible." link="https://www.themezaa.com/html/pofo/blog-post-layout-04"/>
        </div>
    </div>
    </>
  )
}

export default Blog