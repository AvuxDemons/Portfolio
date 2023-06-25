import { useState, useEffect } from 'react';
import { languages, projects } from './assets/data/data.json';
import './assets/css/main.css';

function App() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const loadScripts = async () => {
      // Load vanilla-tilt script
      const vanillaTiltScript = document.createElement('script');
      vanillaTiltScript.src = '/javascript/vanilla-tilt.min.js';
      document.body.appendChild(vanillaTiltScript);

      // Code to be executed after scripts are loaded
      var dob = new Date("01/26/2004");
      var month_diff = Date.now() - dob.getTime();
      var age_dt = new Date(month_diff);
      var year = age_dt.getUTCFullYear();
      var age = Math.abs(year - 1970);
      document.getElementById("age").innerHTML = age;

      // Load typed script
      const typedScript = document.createElement('script');
      typedScript.src = './javascript/typed.js';
      document.body.appendChild(typedScript);

      await new Promise((resolve) => {
        typedScript.onload = resolve;
      });

      new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 150,
        loop: true,
        strings: [
          'I like to code some projects.',
          'I like to watch anime.',
          'I like to read manga.',
          'I like to play games.',
          'I like to learn new things.',
        ],
      });
    };

    loadScripts();
  }, []);


  return (
    <>
      <div id="hero">
        <section className="container">
          <h1 className="hero-title">
            Hi, my name is <span className="text-color-main">Avux</span>
            <br /> <span id="typed"></span>
          </h1>
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">Learn more</a>
          </p>
        </section>
      </div>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="row about-wrapper">
            <div className="about-wrapper__image">
              <img className="img-fluid rounded-img" src="https://s.gravatar.com/avatar/ac61dced29eb701e7ef36be4bc944ee1?s=2048" alt="profile" />
              <p>console.log("Weeb")</p>
            </div>
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                &nbsp; &nbsp; &nbsp; Hi! I'm <span id="age">{age}</span> years old and work on some projects when I have
                the time to spare.
                Programming has been a part of my life since 2019. I love figuring out new ways of doing things
                and letting my ideas come to life.
              </p>
              <p className="about-wrapper__info-text">
                &nbsp; &nbsp; &nbsp; Basically, I code to develop some projects and learn new things! You can
                find some of my projects down below.
              </p>
              <span className="about-wrapper__cta">
                <a href="https://github.com/avuxdemons" className="cta-btn cta-btn--resume" target="_blank" rel="noopener noreferrer">View Github</a>
                <span className="break-hidden">
                  <span className="about-language">
                    {languages.map((language) => (
                      <img className="image-language" src={language.logo} alt={language.language} />
                    ))}
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">Projects</h2>

            {projects.map((project, idx) => (
              <div className="row" key={idx}>
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">{project.title}</h3>
                  <p className="project-wrapper__text-info">{project.description}</p>
                  <div className="project-wrapper__text-btns">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--projects">
                      See Live
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--projects">
                      Github
                    </a>
                  </div>
                </div>

                <div className="project-wrapper__image">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <div className="thumbnail rounded">
                      <img src={project.thumbnail} className="img-fluid" alt={project.title} />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">Want to work together?</p>
            <a href="mailto:avuxdemons@gmail.com" className="cta-btn cta-btn--resume" target="_blank">Let's start talking!</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <a href="#hero" className="back-to-top">
            <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
          </a>
          <div className="social-links">
            <a href="https://www.instagram.com/d.avux/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://github.com/avuxdemons" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.youtube.com/@avux" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
