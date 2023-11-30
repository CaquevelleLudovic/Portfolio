import React, { useState } from 'react';
import './Works.scss';
import { projectDatasTab } from '../../assets/datas/projectDatas.d';
import { FaCircle } from "react-icons/fa6";

function Works() {
  const [faqDatas, setFaqDatas] = useState(projectDatasTab);
  
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
          {faqDatas.map((faqData, index) => (
            <div className="container__project" key={index}>
              <a href={faqData.url}>{faqData.title}</a>
              <span>
                <FaCircle color='#e0ab5a'/>
                <p>{faqData.tools}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Works;
