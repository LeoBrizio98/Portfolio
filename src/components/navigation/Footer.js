import { Link } from 'react-router-dom';
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

const Footer = () => {
	return (
		<div className='container-footer'>
			<div className='footer-dividers'>
				<div className='footer-contact'>
					<h4 className='contact-title-footer'>CONTÁCTANOS</h4>
					<p className='contact-text'><FaRegEnvelope />contactokching@gmail.com</p>
					<p className='contact-text'><FaPhoneAlt />+54 3574-511196</p>
				</div>
				<div className='container-privacy'>
					<Link to='/home' style={{textDecoration:'none'}} className='privacy-links'>Inicio</Link>
					<Link to='/about' style={{textDecoration:'none'}} className='privacy-links'>Sobre Mí</Link>
					<Link to='/services' style={{textDecoration:'none'}} className='privacy-links'>Servicios</Link>
					<Link to='/contact' style={{textDecoration:'none'}} className='privacy-links'>Contacto</Link>
				</div>
				<div className='container-privacy'>
					<Link to='/privacy-policies' style={{textDecoration:'none'}} className='privacy-links'>Política de Privacidad</Link>
					<Link to='/purchasing-policies' style={{textDecoration:'none'}} className='privacy-links'>Política de Compras</Link>
					<Link to='/cookies-policies' style={{textDecoration:'none'}} className='privacy-links'>Política de Cookies</Link>
					<Link to='/services?#faqs' style={{textDecoration:'none'}} className='privacy-links'>Preguntas Frecuentes</Link>
				</div>
				<div className='footer-newsletter'>
					<h3>Suscribite a nuestra newsletter</h3>
				</div>
			</div>
			<div className='footer-copy-media'>
				<div className='footer-copy'>
					<span className='container-rights'>K-Ching {new Date().getFullYear()} &copy; Todos los Derechos Reservados.</span>
				</div>
				<div className='footer-logo'>
					<img src={require(`../../images/k-chingblanco.png`)} alt='logo-kchingblanco' />
				</div>
				<div className='footer-social-media'>
					<Link to='https://www.facebook.com/profile.php?id=61564867531134' className='contain-social-btn facebook' target='_blank' style={{textDecoration:'none'}}>
						<div className='social-btn facebook'>
							<FaFacebook className='social-btn-icon' />
						</div>
						<span className='social-text'>Facebook</span>
					</Link>
					<Link to='https://www.instagram.com/kching_ar/' className='contain-social-btn instagram' target='_blank' style={{textDecoration:'none'}}>
						<div className='social-btn instagram'>
							<FaInstagram className='social-btn-icon' />
						</div>
						<span className='social-text'>Instagram</span>
					</Link>
					<Link to='https://ar.pinterest.com/LeoBrizio98/' className='contain-social-btn pinterest' target='_blank' style={{textDecoration:'none'}}>
						<div className='social-btn pinterest'>
							<FaPinterest className='social-btn-icon' />
						</div>
						<span className='social-text'>Pinterest</span>
					</Link>
					<Link to='https://www.linkedin.com/in/leonel-brizio-940223245' className='contain-social-btn linkedin' target='_blank' style={{textDecoration:'none'}}>
						<div className='social-btn linkedin'>
							<FaLinkedin className='social-btn-icon' />
						</div>
						<span className='social-text'>Linkedin</span>
					</Link>
					<Link to='https://www.youtube.com/@K-ching' className='contain-social-btn youtube' target='_blank' style={{textDecoration:'none'}}>
						<div className='social-btn youtube'>
							<FaYoutube className='social-btn-icon' />
						</div>
						<span className='social-text'>YouTube</span>
					</Link>
					<Link to='https://github.com/LeoBrizio98?tab=repositories' className='contain-social-btn github' target='_blank' style={{textDecoration:'none'}}>
						<div className='social-btn github'>
							<FaGithub className='social-btn-icon' />
						</div>
						<span className='social-text'>GitHub</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;