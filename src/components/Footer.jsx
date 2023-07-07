function Footer() {

    return (
        <>
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

export default Footer;
