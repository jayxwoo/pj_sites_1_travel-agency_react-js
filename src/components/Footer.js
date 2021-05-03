import { useState } from "react";
import { Link } from "react-router-dom"
import Button from "./Button";
import LogoLink from "./LogoLink"

const Footer = () => {
    const [email, setEmail] = useState('');
    const handleEmailSubmit = () => {
        alert(`You have successfuly subscribed! A confirmation email has been sent to ${email}`);
        setEmail('');
    };
    const moveToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <h2 className="footer-top__title">Join newletter to receive special offers</h2>
                    <h3 className="footer-top__subtitle">You can unsubscribe at any time.</h3>
                    <form className="footer-top__form" onSubmit={handleEmailSubmit}>
                        <label htmlFor="email" className="a11y-hidden">Email</label>
                        <input type="email" name="email" id="email" placeholder="your email" className="footer-top__input-email" value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                        <Button btnStyle="btn-outline" className="footer-top__form-btn">Subscribe</Button>
                    </form>
                </div>
                <div className="footer__links">
                    <div className="footer__links-container">
                        <div className="footer__links-wrapper">
                            <h3 className="footer__link-title">About Us</h3>
                            <ul className="footer__link-group">
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>How it works</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Testimonials</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Careers</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Investors</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Terms and Conditions</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links-wrapper">
                            <h3 className="footer__link-title">Contact Us</h3>
                            <ul className="footer__link-group">
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Contact</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Support</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>FAQ</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Sponsorships</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__links-container">
                        <div className="footer__links-wrapper">
                            <h3 className="footer__link-title">Videos</h3>
                            <ul className="footer__link-group">
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Submit Video</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Ambassadors</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Agency</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Influencer</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links-wrapper">
                            <h3 className="footer__link-title">Social Media</h3>
                            <ul className="footer__link-group">
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Instagram</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Facebook</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Youtube</Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link to="/services" className="footer__link-link" onClick={moveToTop}>Twitter</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <LogoLink className="footer-bottom__logo" />
                    <small className="footer-bottom__copyrights">TRAVEL AGENCY © 2021 DEVELOPED BY JUNG-MIN WOO</small>
                    <div className="footer-bottom__soial-container">
                        <Link to="/services" onClick={moveToTop}><span className="material-icons footer-bottom__social-icon footer-bottom__social-icon-facebook">facebook</span></Link>
                        <Link to="/services" onClick={moveToTop}><span className="material-icons footer-bottom__social-icon footer-bottom__social-icon-blog">rss_feed</span></Link>
                        <Link to="/services" onClick={moveToTop}><span className="material-icons footer-bottom__social-icon footer-bottom__social-icon-blog">smart_display</span></Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;