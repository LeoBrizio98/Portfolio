//Components
import { NavLink, Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
//Styles
import '../../styles/navigation.css';
import {
	FaPhoneAlt,
	FaFacebook,
	FaInstagram,
	FaPinterest,
	FaLinkedin,
	FaYoutube,
	FaRegEnvelope,
	FaGithub	 
} from "react-icons/fa";


function Navbar() {

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
    	setMenuOpen(!menuOpen);
  	};

	return (
		<>	
			<div className='container-navbar'>
				<div className='container-logo'>
					<Link to='/' style={{textDecoration: 'none'}}><img src={require(`../../images/k-chingblanco.png`)} alt='k-ching-blanco' /></Link>
				</div>
				<div className={`container-navlinks navbar ${menuOpen ? 'menu-active' : ''}`}>
					<NavLink to='/' className={`btn-navbar ${isActive => isActive ? 'active' : ''}`} style={{textDecoration: 'none'}}><span>Inicio</span></NavLink>
					<NavLink to='/about' className='btn-navbar' style={{textDecoration: 'none'}}><span>Sobre Mí</span></NavLink>
					<NavLink to='/services' className='btn-navbar' style={{textDecoration: 'none'}}><span>Servicios</span></NavLink>
					<NavLink to='/contact' className='btn-navbar' style={{textDecoration: 'none'}}><span>Contacto</span></NavLink>
				</div>
				<button className='nav-open-btn' id='menu-toggle' aria-label='Toggle Menu' onClick={toggleMenu}>
					<span className={`line ${menuOpen ? 'line-1' : ''}`}></span>
					<span className={`line ${menuOpen ? 'line-2' : ''}`}></span>
					<span className={`line ${menuOpen ? 'line-3' : ''}`}></span>
				</button>
				<div className='footer-social-media'>
					<Link to='https://www.facebook.com/profile.php?id=61564867531134' className='contain-social-btn facebook' target='_blank' style={{textDecoration:'none'}}>
						<div className='social-btn facebook'>
							<FaFacebook className='social-btn-icon' />
						</div>
						<span className='social-text'>Facebook</span>
					</Link>
					<Link to='https://www.linkedin.com/in/leonel-brizio-940223245' className='contain-social-btn linkedin' target='_blank' style={{textDecoration:'none'}}>
						<div className='social-btn linkedin'>
							<FaLinkedin className='social-btn-icon' />
						</div>
						<span className='social-text'>Linkedin</span>
					</Link>
					<Link to='https://github.com/LeoBrizio98?tab=repositories' className='contain-social-btn github' target='_blank' style={{textDecoration:'none'}}>
						<div className='social-btn github'>
							<FaGithub className='social-btn-icon' />
						</div>
						<span className='social-text'>GitHub</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;