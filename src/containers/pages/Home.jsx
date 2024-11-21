//Components
import Layout from '../../hocs/Layout';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../../components/aditional/WhatsApp';
import { useEffect, useState } from 'react';
//Styles
import '../../styles/static-pages.css';
//Icons
import { FaArrowRightLong, FaUmbrellaBeach } from "react-icons/fa6";
import { MdRocketLaunch, MdElectricalServices } from "react-icons/md";
import { LuPencilRuler } from "react-icons/lu";
import { BsGraphUpArrow, BsPeopleFill, BsPersonFillSlash } from "react-icons/bs";
import { IoStorefrontSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";



const Home = () => {

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		window.scrollTo(0,0)
	}, []);

	useEffect(() => {
		window.scrollTo(0,0);
    	// Simula una carga, por ejemplo, podrías cargar datos aquí
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 4000); // Ajusta el tiempo según tus necesidades

        return () => clearTimeout(timer);
    }, []);
	
	return (
		<Layout>
			<Preloader loaded={loaded} />
			<div className={`container-banner-home content ${loaded ? 'loaded' : ''}`}>
				<div className='contain-banner-home'>
					<div className='banner-home-title'>
						<h2>Tu Portal al</h2>
						<h2 className='home-title'>Éxito Digital</h2>
					</div>
					<p>Confía en nosotros para transformar tu presencia online y sobresalir en el entorno digital</p>
					<Link to='/services' className='button-home' target='_blank' style={{textDecoration:'none'}}>
						<div className='button-home-icon'>
							<FaArrowRightLong />
						</div>
						<span>Ver Más</span>
					</Link>
				</div>
			</div>
			<div className='container-home-caracteristics'>
				<h3 className='container-uppertitle-home'>Áreas en las que trabajamos</h3>
				<h4 className='home-caracteristics-title'>Nuestros Servicios</h4>
				<div className='container-items'>
					<div className='caracteristics-items'>
						<div className='caracteristics-item-img'>
							<img src={require(`../../images/web-design.webp`)} alt='web-design' />
						</div>
						<div className='caracteristics-item-text'>
							<p>Desarrollo Web</p>
						</div>
					</div>
					<div className='caracteristics-items'>
						<div className='caracteristics-item-img'>
							<img src={require(`../../images/software.webp`)} alt='software' />
						</div>
						<div className='caracteristics-item-text'>
							<p>Software de Ventas</p>
						</div>
					</div>
					<div className='caracteristics-items'>
						<div className='caracteristics-item-img'>
							<img src={require(`../../images/digital-marketing.webp`)} alt='digital-marketing' />
						</div>
						<div className='caracteristics-item-text'>
							<p>Marketing Digital</p>
						</div>
					</div>
					<div className='caracteristics-items'>
						<div className='caracteristics-item-img'>
							<img src={require(`../../images/adds-design.webp`)} alt='adds-design' />
						</div>
						<div className='caracteristics-item-text'>
							<p>Diseño Publicitario</p>
						</div>
					</div>
				</div>
				<Link to='/services' className='button-home' style={{textDecoration: 'none'}}>
					<div className='button-home-icon'>
						<FaArrowRightLong />
					</div>
					<span>Conócelos</span>
				</Link>
			</div>
    		<div className='container-home-plans'>
    			<h3 className='container-uppertitle-home'>Nuestros planes de diseño web</h3>
				<h4 className='home-plans-title'>Haz Crecer tu Negocio</h4>
	      		<div className='contain-home-plans'>
	      			<div className='container-pack'>
						<h3 className='pack-title'>Plan Básico</h3>
						<div className='plans-icon'>
							<LuPencilRuler />
						</div>
						<div className='pack-price'>
							<p>USD</p>
							<p className='price-number-crossed'>$100.00</p>
							<p className='price-number'>$80.00</p>
						</div>
						<div className='pack-add-cart'>
							<Link className='packs-button' to='/services/web-design/1' style={{textDecoration: 'none'}}>
	      						<span>Lo quiero</span>
	      					</Link>
						</div>
						<div className='pack-paragraph'>
							<p className='check-list-text'>Ideal para: <span>Pequeños negocios o emprendedores que buscan una presencia online básica y profesional sin demasiadas funcionalidades avanzadas</span></p>
						</div>
					</div>
					<div className='container-pack recommended'>
						<p className='recommended-text'>Recomendado</p> 
						<h3 className='pack-title'>Plan Estándar</h3>
						<div className='plans-icon'>
							<MdRocketLaunch />
						</div>
						<div className='pack-price'>
							<p>USD</p>
							<p className='price-number-crossed'>$150.00</p>
							<p className='price-number'>$120.00</p>
						</div>
						<div className='pack-add-cart'>
							<Link className='packs-button' to='/services/web-design/2' style={{textDecoration: 'none'}}>
	      						<span>Lo quiero</span>
	      					</Link>
						</div>
						<div className='pack-paragraph'>
							<p className='check-list-text'>Ideal para: <span>Negocios que necesitan vender productos o servicios en línea, pero que buscan una solución rápida y eficaz usando plantillas prediseñadas</span></p>
						</div>
					</div>
					<div className='container-pack'>
						<h3 className='pack-title'>Plan Premium</h3>
						<div className='plans-icon'>
							<BsGraphUpArrow />
						</div>
						<div className='pack-price'>
							<p>USD</p>
							<p className='price-number-crossed'>$225.00</p>
							<p className='price-number'>$180.00</p>
						</div>
						<div className='pack-add-cart'>
							<Link className='packs-button' to='/services/web-design/3' style={{textDecoration: 'none'}}>
	      						<span>Lo quiero</span>
	      					</Link>
						</div>
						<div className='pack-paragraph'>
							<p className='check-list-text'>Ideal para: <span>Empresas que desean destacar con un diseño único, con necesidades específicas y una experiencia de usuario altamente optimizada</span></p>
						</div>
					</div>
	      		</div>
    		</div>
    		<div className='container-home-ecommerce'>
				<div className='contain-home-ecommerce'>
					<div className='contain-advantages'>
						<h3 className='container-uppertitle-home ecommerce-phone2'>¿Tenés un negocio físico?</h3>
						<h4 className='home-caracteristics-title ecommerce-phone'>Conoce las Ventajas de una Tienda Online</h4>
						<div className='advantage-texts'>
							<div className='advantage-list'>
								<div className='advantage-icons'>
									<BsPersonFillSlash className='advantage-icon' />
								</div>
								<p>No necesitas vendedores</p>
							</div>
							<div className='advantage-list'>
								<div className='advantage-icons'>
									<IoStorefrontSharp className='advantage-icon' />
								</div>
								<p>No tenés que alquilar un local</p>
							</div>
							<div className='advantage-list'>
								<div className='advantage-icons'>
									<MdElectricalServices className='advantage-icon' />
								</div>
								<p>No pagas servicios de agua, gas, luz, limpieza, etc.</p>
							</div>
							<div className='advantage-list'>
								<div className='advantage-icons'>
									<FaUmbrellaBeach className='advantage-icon' />
								</div>
								<p>No se toma vacaciones</p>
							</div>
							<div className='advantage-list'>
								<div className='advantage-icons'>
									<BsPeopleFill className='advantage-icon' />
								</div>
								<p>Puede atender a varias personas a la vez</p>
							</div>
							<div className='advantage-list'>
								<div className='advantage-icons'>
									<BiWorld className='advantage-icon' />
								</div>
								<p>Vender a cualquier parte del país</p>
							</div>
						</div>
					</div>
					<div className='contain-standar-pack'>
						<h4 className='home-caracteristics-title ecommerce-phone'>Te Recomendamos Nuestros Plan Estándar</h4>
						<p>Ecommerce prediseñado</p>
						<p>Incluye tu propio logo, elige tus colores y algunos detalles de tu tienda prediseñada</p>
						<Link className='button-home' to='/services/ecommerce' style={{textDecoration: 'none'}}>
							<div className='button-home-icon'>
								<FaArrowRightLong />
							</div>
							<span>Obtenlo</span>
						</Link>
					</div>
				</div>
				<div></div>
			</div>
			<div className='container-home-stadistics'>
				<div className='contain-home-stadistics'>
					<h3 className='stadistics-title'>Creciendo Juntos</h3>
					<div className='stadistics-info'>
						<div className='contain-stadistic-info'>
							<h3 className='stadistics-number'>+4</h3>
							<p className='stadistics-text'>Clientes Satisfechos</p>
						</div>
						<div className='contain-stadistic-info'>
							<h3 className='stadistics-number'>+50</h3>
							<p className='stadistics-text'>Videos Publicitarios</p>
						</div>
						<div className='contain-stadistic-info'>
							<h3 className='stadistics-number'>+3</h3>
							<p className='stadistics-text'>Empresas que confian</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container-home-marketing'>
				<div className='contain-home-marketing'>
					<div className='container-box-marketing'>
						<h3 className='container-uppertitle-home'>Marketing Digital</h3>
						<h4 className='home-caracteristics-title'>Diseña tu Publicidad</h4>
						<p>Amplía tu alcance y conecta con una audiencia global</p>
						<Link className='button-home' to='/services/digital-marketing' style={{textDecoration: 'none'}}>
							<div className='button-home-icon'>
								<FaArrowRightLong />
							</div>
							<span>Comenzar</span>
						</Link>
					</div>
				</div>
				<div className='marketing-home-img'>
    				<img src={require(`../../images/marketing.webp`)} alt='marketing-home' />
    			</div>
    		</div>
    		<div className='container-about-main'>
					<div className='about-main-image'>
					</div>
					<div className='main-about-items'>
						<h3>¿Excel? Si, por favor</h3>
						<p className='about-main-text'>¡Descubre cómo hemos transformado nuestra pasión por las plantillas de Excel en una aventura digital! Sumérgete en nuestra sección "Sobre mí" y conoce la historia detrás de nuestro viaje, desde simples hojas de cálculo hasta la creación de sitios web cautivadores, software a medida y estrategias de marketing digital que impulsan a los pequeños emprendedores hacia el éxito. ¡Únete y sé testigo de nuestra evolución!</p>
						<Link className='button-home' to='/about' style={{textDecoration: 'none'}}>
							<div className='button-home-icon'>
								<FaArrowRightLong />
							</div>
							<span>Sobre Mí</span>
						</Link>
					</div>
			</div>
			<WhatsAppButton />
		</Layout>
	);
};

export default Home