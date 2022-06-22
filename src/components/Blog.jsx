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
            <Postcard/>
            <Postcard/>
            <Postcard/>
            <Postcard/>
        </div>
    </div>
    </>
  )
}

export default Blog