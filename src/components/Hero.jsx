import { useEffect } from 'react';

function Hero() {

    useEffect(() => {
        const loadScripts = async () => {
            
            const vanillaTiltLoaded = !!document.querySelector('script[src="/javascript/vanilla-tilt.min.js"]');
            const typedLoaded = !!document.querySelector('script[src="./javascript/typed.js"]');

            if (!vanillaTiltLoaded) {
                const vanillaTiltScript = document.createElement('script');
                vanillaTiltScript.src = '/javascript/vanilla-tilt.min.js';
                document.body.appendChild(vanillaTiltScript);
            }

            if (!typedLoaded) {
                const typedScript = document.createElement('script');
                typedScript.src = './javascript/typed.js';
                document.body.appendChild(typedScript);

                await new Promise((resolve) => {
                    typedScript.onload = resolve;
                });
            }

            if (!typedLoaded) {
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
            }
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
        </>
    );
}

export default Hero;
