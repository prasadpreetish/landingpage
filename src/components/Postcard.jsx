import React from 'react'

const Postcard = () => {
  return (
    <>
    <div className="post--card">
        <img src="https://www.themezaa.com/html/pofo/images/latest-blog5.jpg" alt="Post 1" />
        <div className="post--date--author">
            <div className="post--date faint--text">25 April 2017  |  </div>
            <div className="post--author faint--text">JAY BENJAMIN</div>
        </div>
        <a href="https://www.themezaa.com/html/pofo/blog-post-layout-01.html" className="post--title b">I like the body. I like to design everything to do with the body.</a>
        <div className="post--cover--content faint--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text...</div>
    </div>
    </>
  )
}

export default Postcard