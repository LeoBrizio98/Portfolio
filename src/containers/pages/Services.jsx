//Components
import Layout from '../../hocs/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FAQ } from '../../components/aditional/FAQ';
//Styles
import '../../styles/services.css';
//Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { IoShieldCheckmarkOutline, IoLogoJavascript } from "react-icons/io5";
import { LuExpand } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import { FaReact, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { LiaMedalSolid } from "react-icons/lia";
import { MdPointOfSale } from "react-icons/md";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaGears } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";


const Services = () => {

	useEffect(() => {
		window.scrollTo(0,0)
	}, []);

	return (

		<Layout>
			<div className='container-web-design-service'>
				<div className='container-description-webd'>
					<h3 className='container-uppertitle-home'>Diseño Web</h3>
					<h4 className='home-caracteristics-title'>En la Actualidad es crucial tener una Página Web</h4>
					<p>Una página web es esencial en el entorno digital actual porque proporciona visibilidad, credibilidad, y una 
						plataforma para estrategias de marketing eficaces, mejora la interacción con los clientes, aumenta la competitividad, optimiza 
						operaciones y permite la expansión global.
					</p>
					<Link className='button-home' to='/services/web-design' style={{textDecoration: 'none'}}>
						<div className='button-home-icon'>
							<FaArrowRightLong />
						</div>
						<span>Ver más</span>
					</Link>
				</div>
				<div className='container-boxes'>
					<div className='contain-box box-1'>
						<IoShieldCheckmarkOutline className='box-icon' />
						<h4 className='box-title'>Credibilidad</h4>
						<p className='box-text'>Tener una página web bien diseñada y actualizada refuerza la credibilidad y profesionalismo de una marca o individuo. Los consumidores tienden a confiar más en negocios que tienen una presencia en línea sólida y profesional.</p>
					</div>
					<div className='contain-box box-2'>
						<LuExpand className='box-icon' />
						<h4 className='box-title'>Expansión</h4>
						<p className='box-text'>Una página web ofrece la oportunidad de expandir tu alcance más allá de las limitaciones geográficas. Puedes llegar a una audiencia global, lo que es especialmente beneficioso para negocios que venden productos o servicios en línea.</p>
					</div>
					<div className='contain-box box-3'>
						<FaRegEye className='box-icon' />
						<h4 className='box-title'>Visibilidad</h4>
						<p className='box-text'>En un mundo cada vez más digital, una página web actúa como la tarjeta de presentación en línea de cualquier negocio, profesional o entidad. Estar presente en internet es crucial para que los clientes potenciales puedan encontrar y acceder a tus productos o servicios.</p>
					</div>
					<div className='contain-box box-4'>
						<LiaMedalSolid className='box-icon' />
						<h4 className='box-title'>Competitividad</h4>
						<p className='box-text'>En la economía digital, la competencia es feroz. Una página web bien diseñada puede diferenciarte de tus competidores. Permite mostrar sus productos de manera detallada y atractiva, destacando sus beneficios y captar la atención de manera efectiva.</p>
					</div>
				</div>
			</div>
			<div className='background-services'>
				<div className='container-social-network'>
					<div className='container-social-image'>
						<img src={require(`../../images/social-media.webp`)} alt='catalogo' />
					</div>
					<div className='contain-social-network'>
						<h3 className='social-network-title'>Construye tu marca<br/> Destaca en la web</h3>
						<p className='branding-text'>En la era digital, el marketing se ha convertido en una herramienta indispensable para el éxito de cualquier negocio. 
						A través del marketing, las empresas pueden crear y mantener una conexión sólida con su audiencia, entender sus necesidades 
						y ofrecerles soluciones que resuenen con ellos. Una estrategia de marketing efectiva no solo aumenta la visibilidad de la 
						marca, sino que también construye credibilidad y confianza entre los consumidores.</p>
						<div className='container-social-options'>
							<div className='contain-social-options-left'>
								<p>Creación de catalogo de tus productos, vende a traves de Facebook, Instagram o WhatsApp</p>
								<Link className='packs-button' to='https://wa.me/+543574511196?text=Hola,%20me%20interesa%20recibir%20más%20información%20acerca%20de%20la%20creación%20de%20catalogos%20en%20redes.' style={{textDecoration: 'none'}}>
									<span>Créalo</span>
								</Link>
							</div>
							<div className='contain-social-options-right'>
								<p>Creación de catalogo de tus productos, vende a traves de Facebook, Instagram o WhatsApp</p>
								<Link className='packs-button' to='https://wa.me/+543574511196?text=Hola,%20me%20interesa%20recibir%20más%20información%20acerca%20de%20la%20creación%20de%20catalogos%20en%20redes.' style={{textDecoration: 'none'}}>
									<span>Créalo</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='container-technologies'>
					<h4 className='technologies-title'>Nuestras tecnologías</h4>
					<div className='contain-technologies'>
						<FaHtml5 className='technology-icon html' />
						<FaCss3Alt className='technology-icon css' />
						<IoLogoJavascript className='technology-icon javascript' />
						<FaReact className='technology-icon react' />
						<FaPython className='technology-icon python' />
						<BiLogoDjango className='technology-icon django' />
					</div>
				</div>
			</div>
			<div className='container-marketing-design'>
				<h3 className='container-uppertitle-home'>Diseño Publicitario</h3>
				<h4 className='home-caracteristics-title'>Posiciona tu marca</h4>
				<div className='marketing-design-boxes'>
					<div className='marketing-design-box'>
						<div className='contain-img-brand'>
							<img src={require(`../../images/logo.png`)} alt='create-logo' />
						</div>
						<h4>El Logo</h4>
						<p>Un buen logo debe ser único, memorable y reflejar la esencia de tu negocio.</p>
					</div>
					<div className='marketing-design-box'>
						<div className='contain-img-brand'>
							<img src={require(`../../images/colores.png`)} alt='colores-marketing' />
						</div>
						<h4>Los Colores</h4>
						<p>Elegir los colores correctos puede ayudarte a transmitir el mensaje adecuado sin palabras.</p>
					</div>
					<div className='marketing-design-box'>
						<div className='contain-img-brand'>
							<img src={require(`../../images/marca.png`)} alt='marca-marketing' />
						</div>
						<h4>La Marca</h4>
						<p>La marca es mucho más que un logo, es la identidad completa de tu empresa.</p>
					</div>
				</div>
				<div className='container-marketing-description'>
					<div className='contain-marketing-description'>
						<h4>Un diseño de marca y un logo son esenciales para cualquier negocio</h4>
						<p>La primera impresión es muy importante. Además, un diseño atractivo y profesional puede diferenciar a una empresa de sus competidores, generar interés y confianza</p>
					</div>
					<Link className='packs-button' to='/services/digital-marketing' style={{textDecoration: 'none'}}>
						<span>Comienza</span>
					</Link>
				</div>
			</div>
			<div className='container-software'>
				<div className='contain-software'>
					<h3 className='container-uppertitle-home'>Punto de Ventas</h3>
					<h4 className='home-caracteristics-title'>Software de ventas</h4>
					<p className='software-text'>Estamos creando nuestro software de ventas, para facilitar tus ventas, tu organización y aumentar la eficiencia de tu negocio.</p>
					<div className='container-software-icons'>
						<div className='software-icons'>
							<FaGears className='software-icon' />
						</div>
						<div className='software-icons'>
							<MdPointOfSale className='software-icon' />
						</div>
						<div className='software-icons'>
							<HiMiniArrowsUpDown className='software-icon' />
						</div>
						<div className='software-icons'>
							<IoDocumentTextOutline className='software-icon' />
						</div>
					</div>
				</div>
				<div className='container-software-img'>
					<img src={require(`../../images/en-espera.jpg`)} alt='en-espera' />
				</div>
			</div>
			<div className='container-faqs' id='faqs'>
				<h3 className='container-uppertitle-home'>FAQS</h3>
				<h4 className='home-caracteristics-title'>Preguntas Frecuentes</h4>
				<FAQ />
			</div>
		</Layout>
	);
};

export default Services;