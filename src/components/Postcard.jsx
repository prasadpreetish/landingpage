import React from 'react'

const Postcard = (props) => {
  return (
    <>
    <div className="post--card">
        <img src={props.blogimgsrc} alt="Post 1" />
        <div className="post--date--author">
            <div className="post--date faint--text">{props.blogdate} </div>
            <div className="post--author faint--text"> &nbsp;{props.blogauth}</div>
        </div>
        <a href={props.link} className="post--title b">{props.blogtitle}</a>
        <div className="post--cover--content faint--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text...</div>
    </div>
    </>
  )
}

export default Postcard