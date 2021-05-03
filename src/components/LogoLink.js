import { Link } from 'react-router-dom';

const LogoLink = () => {
    return (
        <Link to="/" className="logo-link">TRAVEL AGENCY<span className="material-icons logo-icon">explore</span></Link>
    );
}

export default LogoLink;