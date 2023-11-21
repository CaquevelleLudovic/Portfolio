import React from 'react'
import './Works.scss'
import { FaCircle } from "react-icons/fa6";

function Works() {
  return (
    <div className='main__work'>
      <div className='container__title__work'>
        <div className='nav__home'>
          <div className='nav__link__item'>
            <a href='/'>Home</a>
          </div>
          <div className="nav__line__item" />
        </div>
      </div>        
      <div className="container__works">
        <div className="container__works__left">
          <h3>Work</h3>
          <p>Here is a showcase of my completed projects including the graphic charter, design and website</p>
        </div>
        <div className="container__works__right">
          <div className="container__project">
            <a href="">#1 Project</a>
            <span>
              <FaCircle color='#e0ab5a'/>
              <p>Framework / Bundle / CMS </p>
            </span>
          </div>
          <div className="container__project">
            <a href="">#2 Project</a>
            <span>
              <FaCircle color='#e0ab5a'/>
              <p>Framework / Bundle / CMS </p>
            </span>
          </div>
          <div className="container__project">
            <a href="">#3 Project</a>
            <span>
              <FaCircle color='#e0ab5a'/>
              <p>Framework / Bundle / CMS </p>
            </span>
          </div>
          <div className="container__project">
            <a href="">#4 Project</a>
            <span>
              <FaCircle color='#e0ab5a'/>
              <p>Framework / Bundle / CMS </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works