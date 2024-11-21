//Components
import { NavLink, Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
//Styles
import '../../styles/navigation.css';


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
			</div>
		</>
	);
};

export default Navbar;