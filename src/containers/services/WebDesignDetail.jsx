//Components
import Layout from '../../hocs/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { AnimatedText } from '../../components/aditional/AnimatedText';
//Styles
import '../../styles/web-design.css';
//Icons
import { LiaToolsSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";
import { CgStyle } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosStar, IoMdPricetags } from "react-icons/io";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { RiBrainLine } from "react-icons/ri";
import { TiLightbulb, TiArrowMaximise } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdNewspaper } from "react-icons/md";


const WebDesignDetail = () => {

	const params = useParams();
	const packId = params.packId;

	useEffect(() => {
		window.scrollTo(0,0)
	}, []);

	return (

		<Layout>
			<div className='container-detail-title'>
				{(parseInt(packId) === 1) ? <AnimatedText text='Plan Básico' className='detail-webd-title' /> : <></>}
				{(parseInt(packId) === 2) ? <AnimatedText text='Plan Estándar' className='detail-webd-title' /> : <></>}
				{(parseInt(packId) === 3) ? <AnimatedText text='Plan Premium' className='detail-webd-title' /> : <></>}
			</div>
			<div className='container-our-work'>
				<div className='customer-support-header'>
					<div className='icon-header-detail'>
						<LiaToolsSolid />
					</div>
					<h3 className='container-uppertitle-home'>Nuestro trabajo</h3>
					<h4 className='home-caracteristics-title'>Brindando la Mejor Calidad</h4>
				</div>
				<div className='contain-our-work'>
					<div className='our-work-boxes'>
						<h3>Diseño web</h3>
						<div className='our-work-box'>
							<div className='our-work-icon'>
								<TiArrowMaximise />
							</div>
							<div>
								<h4>Flexible</h4>
								<p>El diseño web flexible se adapta a cualquier dispositivo, proporcionando una experiencia de usuario consistente en móviles, tabletas y computadoras de escritorio.</p>
							</div>
						</div>
						<div className='our-work-box'>
							<div className='our-work-icon'>
								<RiBrainLine />
							</div>
							<div>
								<h4>Inteligente</h4>
								<p>El diseño web flexible se adapta a cualquier dispositivo, proporcionando una experiencia de usuario consistente en móviles, tabletas y computadoras de escritorio.</p>
							</div>
						</div>
						<div className='our-work-box'>
							<div className='our-work-icon'>
								<TiLightbulb />
							</div>
							<div>
								<h4>Creativo</h4>
								<p>El diseño web flexible se adapta a cualquier dispositivo, proporcionando una experiencia de usuario consistente en móviles, tabletas y computadoras de escritorio.</p>
							</div>
						</div>
					</div>
					<div className='our-work-texts'>
						<h3>La integración efectiva de los enfoques más avanzados en diseño web</h3>
						<p>Para brindarte un servicio óptimo que maximice tu presencia en internet, captando la atención de tu audiencia y mejorando tu visibilidad en el entorno digital.</p>
						<Link className='button-home' to='https://wa.me/+543574511196?text=Hola,%20quiero%20obtener%20mi%20página%20web.' style={{textDecoration: 'none'}}>
							<div className='button-home-icon'>
								<FaArrowRightLong />
							</div>	
							<span>Obtenla</span>
						</Link>
					</div>
				</div>
			</div>
			{(parseInt(packId) === 3) ? 
				<div className='container-animation-details'>
					<div className='customer-support-header'>
						<div className='icon-header-detail'>
							<CgStyle />
						</div>
						<h3 className='container-uppertitle-home'>Animaciones y Diseño</h3>
						<h4 className='home-plans-title'>Lleva tu Sitio Web al Siguiente Nivel</h4>
					</div>
					<div className='contain-animation-details'>
						<div className='animation-details-title'>
							<p>Animaciones y estilo personalizados para una experiencia de usuario óptima</p>
						</div>
						<div className='container-grid-animation'>
							<div className='animation-content'>
								<div className='animation-face face-1'>
									<div className='content'>
										<h4>Animaciones que Cautivan</h4>
									</div>
								</div>
								<div className='animation-face face-2'>
									<div className='content'>
										<p>Haz de tu página web una obra maestra interactiva</p>
									</div>
								</div>
							</div>
							<div className='animation-content'>
								<div className='animation-face face-1'>
									<div className='content'>
										<h4>Diseño Personalizado a tu Medida</h4>
									</div>
								</div>
								<div className='animation-face face-2'>
									<div className='content'>
										<p>Transforma tus ideas en una página web única y refleja la esencia de tu negocio.</p>
									</div>
								</div>
							</div>
							<div className='animation-content'>
								<div className='animation-face face-1'>
									<div className='content'>
										<h4>Optimización para el Éxito</h4>
									</div>
								</div>
								<div className='animation-face face-2'>
									<div className='content'>
										<p>Aumenta la velocidad, accesibilidad y rendimiento de tu sitio web.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> : <></>}
			{(parseInt(packId) === 3) ? 
				<div className='container-predesign-ecommerce'>
					<div className='customer-support-header'>
						<div className='icon-header-detail'>
							<IoIosStar />
						</div>
						<h3 className='container-uppertitle-home'>Tu E-commerce</h3>
						<h4 className='home-caracteristics-title'>E-Commerce Personalizado</h4>
					</div>
					<div className='contain-predesign-ecommerce'>
						<div className='contain-predesign-image'>
							<img src={require(`../../images/ecommerce.webp`)} alt='ecommerce' />
						</div>
						<div className='predesign-ecommerce-content'>
							<h3>¡Diseña el negocio de tus sueños!</h3>
							<p>Crea tu e-commerce personalizado desde cero, eligiendo tus propias imágenes, colores, animaciones y detalles estéticos. Lanza tu tienda online con opciones de pago seguras a través de Mercado Pago o PayPal.</p>
							<Link className='button-home' to='https://wa.me/+543574511196?text=Hola,%20quiero%20obtener%20mi%20página%20de%20e-commerce%20personalizada.' style={{textDecoration: 'none'}}>
								<div className='button-home-icon'>
									<FaArrowRightLong />
								</div>
								<span>Comienza</span>
							</Link>
						</div>
					</div>
				</div> : <></>}
			{(parseInt(packId) === 2) ? 
				<div className='container-predesign-ecommerce'>
					<div className='customer-support-header'>
						<div className='icon-header-detail'>
							<IoIosStar />
						</div>
						<h3 className='container-uppertitle-home'>Tu E-commerce</h3>
						<h4 className='home-caracteristics-title'>E-Commerce Prediseñado</h4>
					</div>
					<div className='contain-predesign-ecommerce'>
						<div className='contain-predesign-image'>
							<img src={require(`../../images/ecommerce.webp`)} alt='ecommerce' />
						</div>
						<div className='predesign-ecommerce-content'>
							<h3>¡Sal a vender!</h3>
							<p>Tu página de ventas está lista. Elige tus imágenes, colores y detalles estéticos, y lanza tu e-commerce funcional 
							con opciones de pago seguras a través de Mercado Pago o PayPal.</p>
							<Link className='button-home' to='https://wa.me/+543574511196?text=Hola,%20quiero%20obtener%20mi%20página%20de%20e-commerce%20prediseñada.' style={{textDecoration: 'none'}}>
								<div className='button-home-icon'>
									<FaArrowRightLong />
								</div>
								<span>Comienza</span>
							</Link>
						</div>
					</div>
				</div>
			 : 
				<></>
			}
			<div className='container-webd-types'>
	            <div className='box-web-design'>
	                <RiUserLine className='icon-box-effect' />
	                <h4>Blog Personal</h4>
	                <p>Comparte tus pensamientos, experiencias, conocimientos y pasatiempos con una audiencia global. Los temas pueden variar 
	                ampliamente, desde la vida cotidiana y viajes hasta opiniones sobre diversos temas.</p>
	            </div>
	            <div className='box-web-design'>
	                <IoTimerOutline className='icon-box-effect' />
	                <h4>Landing Page</h4>
	                <p>Diseñada para convertir visitantes en clientes. Esta página esta vinculada a una campaña de marketing 
	                específica y tiene un objetivo claro, como la venta de un producto, la recopilación de correos electrónicos o la 
	                promoción de un evento.</p>
	            </div>
	            <div className='box-web-design'>
	                <HiOutlineBuildingLibrary className='icon-box-effect' />
	                <h4>Web Institucional</h4>
	                <p>El sitio web oficial de una organización, como una empresa, universidad, ONG o entidad gubernamental. Su propósito es 
	                proporcionar información sobre la institución, sus servicios, misión, visión, historia y equipo.</p>
	            </div>
	            <div className='box-web-design'>
	                <MdNewspaper className='icon-box-effect' />
	                <h4>Portal Web</h4>
	                <p>Es un sitio que ofrece una variedad de recursos y servicios en un solo lugar, como noticias, correo electrónico, foros, 
	                motores de búsqueda y enlaces a otras páginas. Están diseñados para ser puntos de entrada a internet para los usuarios.</p>
	            </div>
	        </div>
			<div className='container-responsive-all'>
				<div className='customer-support-header'>
					<div className='icon-header-detail'>
						<TbTriangleSquareCircleFilled />
					</div>
					<h3 className='container-uppertitle-home'>Diseño responsivo</h3>
					<h4 className='home-caracteristics-title'>Celulares, Tablets, Computadoras y Más</h4>
				</div>
				<div className='container-responsive-design'>
					<div className='contain-responsive-design'>			
						<h3>Diseño eficaz</h3>
						<p>Adaptado a todo tipo de pantallas</p>
					</div>
					<div className='responsive-design-image'>
						<img src={require(`../../images/responsive-design.webp`)} alt='responsive-design' />
					</div>
				</div>
			</div>
			<div className='container-ecommerce-price'>
				<div className='customer-support-header'>
					<div className='icon-header-detail'>
						<IoMdPricetags />
					</div>
					<h3 className='container-uppertitle-home'>Precios del plan</h3>
					<h4 className='home-plans-title'>¡Los Mejores Precios Para Vos!</h4>
				</div>
				<div className='contain-ecommerce-price'>
					<div className='ecommerce-price-title'>
						<h3>Te ofrecemos los mejores precios</h3>
					</div>
					<div className='ecommerce-price-text'>
						<div className='container-glassmorph'>
							<div className='glassmorph-box'>
								<span></span>
								<div className='glassmorph-content'>
									<h4 className='price-title'>Costo de mantenimiento mensual</h4>
									<p className='price-subtitle'>Incluye el mantenimiento del sitio web, costo mensual del dominio y del alojamiento web</p>
									{(parseInt(packId) === 1) ? <p className='price-text'>U$D 20.00</p> : <></>}
									{(parseInt(packId) === 2) ? <p className='price-text'>U$D 35.00</p> : <></>}
									{(parseInt(packId) === 3) ? <p className='price-text'>U$D 60.00</p> : <></>}
								</div>
							</div>
							<div className='glassmorph-box'>
								<span></span>
								<div className='glassmorph-content'>
									<h4 className='price-title'>Precio del sitio web</h4>
									<p className='price-subtitle'>Incluye la creación del sitio web, paginas del sitio, funcionalidades, animaciones y efectos</p>
									{(parseInt(packId) === 1) ? <p className='price-text'>U$D 80.00</p> : <></>}
									{(parseInt(packId) === 2) ? <p className='price-text'>U$D 120.00</p> : <></>}
									{(parseInt(packId) === 3) ? <p className='price-text'>U$D 180.00</p> : <></>}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container-customer-support'>
				<div className='customer-support-header'>
					<div className='icon-header-detail'>
						<IoSettingsSharp />
					</div>
					<h3 className='container-uppertitle-home'>Atención al cliente</h3>
					<h4 className='home-caracteristics-title'>Atención Personalizada y Eficiente</h4>
				</div>
				<div className='contain-customer-support'>
					<div className='customer-support-content'>
						<p className='support-text'><FaCheck />Disponible las 24hs</p>
						<p className='support-text'><FaCheck />Atención personalizada</p>
						<p className='support-text'><FaCheck />Respuesta rápida y eficiente</p>
						<p className='support-text'><FaCheck />Seguimiento post-servicio</p>
						<p className='support-text'><FaCheck />Asesoramiento continuo</p>
						{(parseInt(packId) === 3) ? <p className='support-text'><FaCheck />Soporte técnico prioritario</p> : <></>}
					</div>
					<div className='customer-support-image'>
						<img src={require(`../../images/atencion-cliente.webp`)} alt='atencion-cliente' />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default WebDesignDetail;