import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import LogoLink from './LogoLink';

const Navbar = () => {
    const [menuBtn, setMenuBtn] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setMenuBtn(!menuBtn);
    };
    const checkMobile = () => {
        if (window.innerWidth <= 850) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setMenuBtn(false);
        };
    };
    window.addEventListener('load', () => {
        checkMobile();
    });
    window.addEventListener('resize', () => {
        checkMobile();
    });
    if (menuBtn) {
        document.body.classList.add('scroll-disabled');
    } else {
        document.body.classList.remove('scroll-disabled');
    }
    

    return (
        <header className="header">
            <div className="header-container">
                <LogoLink />
                <nav className={menuBtn ? 'header__nav header__nav--active' : 'header__nav'}>
                    <ul className="header__nav-menu-group">
                        <li className="header__nav-menu-item"><NavLink className="header__nav-menu-link" exact to="/">Home</NavLink></li>
                        <li className="header__nav-menu-item"><NavLink className="header__nav-menu-link" to="/services">Services</NavLink></li>
                        <li className="header__nav-menu-item"><NavLink className="header__nav-menu-link" to="/products">Products</NavLink></li>
                    </ul>
                    <Link to="/sign-up" className="sign-up-link"><Button btnStyle="btn-outline" btnSize={isMobile ? 'btn-large' : 'btn-medium'} className="btn-sign-up">Sign Up</Button></Link>
                </nav>
                {isMobile && <button className="menu-btn" onClick={toggleMenu}><span className="material-icons menu-icon">{menuBtn ? 'close' : 'menu'}</span></button>}
            </div>
        </header>
    );
}

export default Navbar;