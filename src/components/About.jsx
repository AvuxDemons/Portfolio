import { useState, useEffect } from 'react';
import { languages } from '../assets/data/data.json';

function About() {

    const [age, setAge] = useState(0);

    useEffect(() => {

        const loadScripts = async () => {

            var dob = new Date("01/26/2004");
            var month_diff = Date.now() - dob.getTime();
            var age_dt = new Date(month_diff);
            var year = age_dt.getUTCFullYear();
            var age = Math.abs(year - 1970);
            document.getElementById("age").innerHTML = age;

        };

        loadScripts();
    }, []);

    return (
        <>
            <section id="about">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="row about-wrapper">
                        <div className="about-wrapper__image">
                            <img className="img-fluid rounded-img" src="https://s.gravatar.com/avatar/ac61dced29eb701e7ef36be4bc944ee1?s=2048" alt="profile" />
                            <p><em>"Pretend Everything Is Fine"</em></p>
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
                                <a href="https://github.com/avuxdemons" className="cta-btn cta-btn--resume" target="_blank" rel="noopener noreferrer">Github</a>
                                <span className="break-hidden">
                                    <span className="about-language">
                                        {languages.map((language, idx) => (
                                            <img className="image-language" src={language.logo} alt={language.language} key={idx} title={language.language + ' : ' + language.knowledge + "%"} />
                                        ))}
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
