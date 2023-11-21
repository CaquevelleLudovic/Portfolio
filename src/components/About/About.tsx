import React from 'react'
import './About.scss'

function About() {
  return (
    <div className='main__about'>
      <div className='container__title__about'>
        <div className='nav__home'>
          <div className='nav__link__item'>
            <a href='/'>Home</a>
          </div>
          <div className="nav__line__item" />
        </div>
      </div>        
      <div className="title__page">
        <h2>About</h2>
      </div>
      <div className="container__about_texte">
        <div className="about__texte">
          <img src="src/assets/img/personal_photo.jpg" alt="" />
          <h3>Who i am ?</h3>
          <p>
            Hello, my name is Caquevelle Ludovic, i am a graduate in FrontEnd Web development, but also a self-taught Designer. I enjoy being in contact with clients and creating a website in their image while keeping an attractive and immersive design for users.
            <br />
            I have a passion for Video Games, mangas and comics. I try to do weekly technology watch in order to stay up to date on new developments and discover new libraries or frameworks.
            <br />
            To find out more here is my CV
          </p>
        </div>
        <div className="about__cv">
          <a href="https://drive.google.com/file/d/1q--_3IOyAZnjk1YJ3s7RmNcGprfugLGx/view?usp=sharing">My CV</a>
        </div>
      </div>
    </div>
  )
}

export default About