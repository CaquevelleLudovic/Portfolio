import './Home.scss';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="main">
      <div className="home__left " id='home__left__responsive'>
        <div className="presentation">
          <div className="picture__home">
            <img
              src="src/assets/img/personal_photo.jpg"
              alt="Caquevelle Ludovic"
            />
          </div>
          <div className="description__home">
            <h1>Caquevelle Ludovic</h1>
            <h3>Developer Front-End / Website Integrator</h3>
          </div>
        </div>
        <div className="nav__social__link" id='responsive__nav__social__link'>
          <div className="nav__link__item">
            <a href="https://github.com/CaquevelleLudovic">Git</a>
          </div>
          <div className="nav__link__item">
            <a href="www.google.fr">Inst</a>
          </div>
          <div className="nav__link__item">
            <a href="https://www.malt.fr/profile/ludoviccaquevelle">Malt</a>
          </div>
          <div className="nav__link__item">
            <a href="https://www.linkedin.com/in/ludovic-caquevelle/">Link</a>
          </div>
          <div className="nav__line__item" />
        </div>
      </div>
      <div className="home__right" id='home__right__responsive'>
        <nav>
          <ul>
            <div className="nav__item">
              <span className="block" />
              <li><NavLink
                className="nav__link"
                to="/Works">Works</NavLink></li>
            </div>
            <div className="nav__item">
              <span className="block" />
              <li><NavLink
                className="nav__link"
                to="/About">About</NavLink></li>
            </div>
            <div className="nav__item">
              <span className="block" />
              <li>
              <NavLink
                className="nav__link"
                to="/Contact">Contact</NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
