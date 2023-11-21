import './Contact.scss'
import { RiLinkedinBoxFill,RiInstagramFill,RiGithubFill } from "react-icons/ri";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_0e43kbn', 'template_o5mtxot', form.current, 'qTkeXdLFpS48sTWKm')
        .then((result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className='main__contact'>
      <div className='container__title__contact'>
        <div className='nav__home'>
          <div className='nav__link__item'>
            <a href='/'>Home</a>
          </div>
          <div className="nav__line__item" />
        </div>
      </div>        
      <div className="title__page">
        <h2>Contact</h2>
      </div>
      <div className="container__contact">
        <p>To contact me, come to one of my social networks or send me  an email
        </p>
        <div className="link__social">
          <div className="link__social__left">
            <div className="container__social">
              <RiLinkedinBoxFill className='logo__social'/>
              <a href="https://www.linkedin.com/in/ludovic-caquevelle/">LinkedIn</a>
            </div>
            <div className="container__social">
              <RiInstagramFill className='logo__social'/>
              <a href="">Instagram</a>
            </div>
          </div>
          <div className="link__social__right">
           <div className="container__social">
              <img src="src/assets/img/malt-svgrepo-com.svg" alt="Logo Malt" />
              <a href="https://www.malt.fr/profile/ludoviccaquevelle">Malt</a>
            </div>
            <div className="container__social">
            <RiGithubFill className='logo__social'/>
              <a href="https://github.com/CaquevelleLudovic">Github</a>
            </div> 
          </div>
        </div>
      </div>
      <div className='container__form'>
        <form ref={form} onSubmit={sendEmail}>
          <div className="container__left__contact">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className="container__right__contact">
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send Email" />
          </div>
        </form>
      </div>
    </div>
  )
}
export default Contact

