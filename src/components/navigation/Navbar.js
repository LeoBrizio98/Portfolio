//React
import { Link } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
//Components
import LanguageSwitcher from '../../components/aditional/LanguageSwitcher';
//Styles
import '../../styles/navigation.css';
import { MdOutlineWbSunny, MdNightlight } from "react-icons/md";


function Navbar() {

	const { t } = useTranslation(); 
	const [menuOpen, setMenuOpen] = useState(false);
	const [theme, setTheme] = useState("light")

	// Revisar en el storage el tema seleccionado en sesiones anteriores
	useEffect(() => {
	  	const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
		    setTheme(savedTheme);
		}
	}, []);

	// Cambiar de tema
	useEffect(() => {
	  	document.documentElement.setAttribute("data-theme", theme);
	  	localStorage.setItem("theme", theme);
	}, [theme]);

	// Preferencia del sistema
	useEffect(() => {
	  	const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	  	setTheme(userPrefersDark ? "dark" : "light");
	}, []);

	const toggleMenu = () => {
    	setMenuOpen(!menuOpen);
  	};

  	const toggleTheme = () => {
    	setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  	};

	return (
		<>	
			<div className='container-navbar'>
				<div className={`container-navlinks navbar ${menuOpen ? 'menu-active' : ''}`}>
					<Link to='/#top' className='btn-navbar' style={{textDecoration: 'none'}}><span>{t("home")}</span></Link>
					<Link to='/#projects' className='btn-navbar' style={{textDecoration: 'none'}}><span>{t("projects")}</span></Link>
					<Link to='/#about' className='btn-navbar' style={{textDecoration: 'none'}}><span>{t("about")}</span></Link>
					<Link to='/#skills' className='btn-navbar' style={{textDecoration: 'none'}}><span>{t("skills")}</span></Link>
					<Link to='/#contact' className='btn-navbar' style={{textDecoration: 'none'}}><span>{t("contact-2")}</span></Link>
				</div>
				<div className='container-switchers'>
					<LanguageSwitcher />
					<button className='button-change-theme' onClick={toggleTheme}>{theme === 'light' ? <MdNightlight className='icon-change-theme' /> : <MdOutlineWbSunny className='icon-change-theme' /> }</button>
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