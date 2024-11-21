//Components
import Layout from '../../hocs/Layout';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Styles
import '../../styles/services.css';
//Icons
import { GiExpander } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { RiDiscountPercentLine, RiSeoLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { TiArrowRightOutline } from "react-icons/ti";


const DigitalMarketing = () => {

	useEffect(() => {
		window.scrollTo(0,0)
	}, []);

	const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);

	const handleTitleClick = (index) => {
		setVisibleDescriptionIndex(visibleDescriptionIndex === index ? null : index);
	};

	const marketingData = [
  		{	
  			id: 1,
    		title: "Diseño de Marca Básico",
    		price: "AR$ 50.000",
    		description: "Diseño de marca, manual normativo básico (no incluye creación de logo)",
  		},
  		{	
  			id: 2,
    		title: "Diseño de Marca Avanzado",
    		price: "AR$ 120.000",
    		description: "Diseño de marca, manual normativo, creación de logotipo, y eslogan",
  		},
  		{	
  			id: 3,
    		title: "Diseño de Logotipo Básico",
    		price: "AR$ 35.000",
    		description: "Diseño y re-creación de logotipo",
  		},
  		{	
  			id: 4,
    		title: "Diseño de Logotipo Avanzado",
    		price: "AR$ 80.000",
    		description: "Diseño y re-creación de logotipo, isotipo, imagotipo, isologo, elección de paleta de colores",
  		},
  		{	
  			id: 5,
    		title: "Carrusel de Imágenes en Instagram o Facebook Básico",
    		price: "AR$ 15.000",
    		description: "Carrusel de 10 fotos con retoques y fitros",
  		},
  		{	
  			id: 6,
    		title: "Carrusel de Imágenes en Instagram o Facebook Personalizado",
    		price: "AR$ 8.000",
    		description: "Carrusel de 10 imágenes personalizadas, publicitarias, editadas, diseñadas a medida con retoques y fitros",
  		},
  		{	
  			id: 7,
    		title: "Reel de Instagram o Facebook Básico",
    		price: "AR$ 8.000",
    		description: "Reel de Instagram o Facebook de hasta 30s de duración",
  		},
  		{	
  			id: 8,
    		title: "Reel de Instagram o Facebook Avanzado",
    		price: "AR$ 15.000",
    		description: "Reel de Instagram o Facebook mayor a 30s hasta 60s de duración",
  		},
  		{	
  			id: 9,
    		title: "Video Publicitario",
    		price: "AR$ 20.000",
    		description: "Video publicitario de hasta 1 minuto de duración",
  		},
  		{	
  			id: 10,
    		title: "Video Publicitario por Minuto Extra",
    		price: "AR$ 15.000",
    		description: "Costo por cada minuto extra del video publicitario",
  		},
  		{	
  			id: 11,
    		title: "Creación de Catálogo de Redes Sociales Básico",
    		price: "AR$ 50.000",
    		description: "Creación de catalogo de Instagram, Facebook o WhatsApp Bussines",
  		},
  		{	
  			id: 12,
    		title: "Manejo Parcial de tus Redes Sociales",
    		price: "AR$ 80.000",
    		description: "Control de redes, 2 historias y 2 publicación semanal, 1 reel al mes",
  		},
  		{	
  			id: 13,
    		title: "Manejo Total de tus Redes Sociales",
    		price: "AR$ 120.000",
    		description: "Control de redes, 7 historias y 3 publicaciones semanales, 2 reel al mes, respuesta automática",
  		},
	];

	return (

		<Layout>
			<div className='container-marketing-design'>
				<h3 className='container-uppertitle-home'>Diseño Publicitario</h3>
				<h4 className='home-caracteristics-title'>Crea tu logo, definí tus colores y destaca tu marca</h4>
				<div className='marketing-design-boxes'>
					<div className='marketing-design-box'>
						<div className='contain-img-brand'>
							<img src={require(`../../images/logo.png`)} alt='logo' />
						</div>
						<h4>El Logo</h4>
						<p>Un buen logo debe ser único, memorable y reflejar la esencia de tu negocio.</p>
					</div>
					<div className='marketing-design-box'>
						<div className='contain-img-brand'>
							<img src={require(`../../images/colores.png`)} alt='colores' />
						</div>
						<h4>Los Colores</h4>
						<p>Elegir los colores correctos puede ayudarte a transmitir el mensaje adecuado sin palabras.</p>
					</div>
					<div className='marketing-design-box'>
						<div className='contain-img-brand'>
							<img src={require(`../../images/marca.png`)} alt='marca' />
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
			<div className='container-marketing-information'>
				<h3 className='container-uppertitle-home'>Marketing Digital</h3>
				<h4 className='home-plans-title'>Destaca con Publicidad Personalizada</h4>
				<div className='contain-marketing-information'>
					<div className='marketing-information-asiders'>
						<div className='marketing-information-aside'>
							<div className='marketing-icons'>
								<GiExpander className='software-icon' />
							</div>
							<div className='marketing-texts'>
								<h3>Alcance masivo y segmentado</h3>
								<p>El marketing digital permite llegar a una audiencia global, pero también segmentar el público de forma precisa.</p>
							</div>
						</div>
						<div className='marketing-information-aside'>
							<div className='marketing-icons'>
								<RiDiscountPercentLine className='software-icon' />
							</div>
							<div className='marketing-texts'>
								<h3>Costos accesibles</h3>
								<p>Las campañas de publicidad en redes sociales y plataformas digitales pueden adaptarse a cualquier presupuesto.</p>
							</div>
						</div>
						<div className='marketing-information-aside'>
							<div className='marketing-icons'>
								<MdAccessTime className='software-icon' />
							</div>
							<div className='marketing-texts'>
								<h3>Medición en tiempo real</h3>
								<p>El marketing digital ofrece herramientas para medir el rendimiento de las campañas en tiempo real.</p>
							</div>
						</div>
						<div className='marketing-information-aside'>
							<div className='marketing-icons'>
								<RiSeoLine className='software-icon' />
							</div>
							<div className='marketing-texts'>
								<h3>Optimización de SEO</h3>
								<p>El marketing digital incluye estrategias de SEO que mejoran la visibilidad de una marca en los motores de búsqueda.</p>
							</div>
						</div>
					</div>
					<div className='marketing-information-img'>
						<img src={require(`../../images/marketing.webp`)} alt='marketing' />
					</div>
					<div className='marketing-information-asiders'>
						<div className='marketing-information-aside'>
							<div className='marketing-icons'>
								<IoMdTrendingUp className='software-icon' />
							</div>
							<div className='marketing-texts'>
								<h3>Tendencias y adaptación rápida</h3>
								<p>El marketing digital obliga a las empresas a estar al día con las tendencias y cambios en el comportamiento del consumidor.</p>
							</div>
						</div>
						<div className='marketing-information-aside'>
							<div className='marketing-icons'>
								<TbEdit className='software-icon' />
							</div>
							<div className='marketing-texts'>
								<h3>Contenido personalizado</h3>
								<p>Las plataformas digitales permiten crear contenido personalizado y relevante para cada segmento de la audiencia.</p>
							</div>
						</div>
						<div className='marketing-information-aside'>
							<div className='marketing-icons'>
								<FaPeopleGroup className='software-icon' />
							</div>
							<div className='marketing-texts'>
								<h3>Interacción directa con la audiencia</h3>
								<p>Las redes sociales permiten una interacción directa y en tiempo real con los clientes.</p>
							</div>
						</div>
						<div className='marketing-information-aside'>
							<div className='marketing-icons'>
								<TfiReload className='software-icon' />
							</div>
							<div className='marketing-texts'>
								<h3>Estrategias de remarketing</h3>
								<p>Las campañas de remarketing permiten volver a impactar a aquellos usuarios que ya interactuaron con la marca.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container-marketing-estrategy'>
				<div className='marketing-estrategy-img'>
					<img src={require(`../../images/image-stadistic.webp`)} alt='img-stadistic' />
				</div>
				<div className='contain-marketing-estrategy'>
					<h3 className='container-uppertitle-home'>Estrategia de Marketing</h3>
					<h4 className='home-caracteristics-title'>Una Estrategia para Destacar</h4>
					<div className='estrategy-info'>
						<div className='percent-number'>
							<p>81%</p>
						</div>
						<div className='estrategy-info-text'>
							<h3>Preferencia del consumidor</h3>
							<p>El 81% de los consumidores realiza alguna investigación en línea antes de hacer una compra importante, lo que subraya la importancia de una sólida presencia digital.</p>
						</div>
					</div>
					<div className='estrategy-info'>
						<div className='percent-number'>
							<p>73%</p>
						</div>
						<div className='estrategy-info-text'>
							<h3>Redes sociales como herramienta de marketing</h3>
							<p>Más del 73% de los profesionales de marketing consideran que las redes sociales han sido "algo efectivas" o "muy efectivas" para sus negocios.</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container-marketing-services'>
				<h3 className='container-uppertitle-home'>Marketing Digital</h3>
				<h4 className='home-caracteristics-title'>Destaca con Publicidad Personalizada</h4>
				<div>
					<div className='contain-marketing-services'>
						<div className='container-grid-services'>
							<h4>Servicio</h4>
							<h4 className='services-description'>Descripción</h4>
							<h4>Precio</h4>
							<h4>Link</h4>
						</div>
	      				{marketingData.map((marketing, index) => (
	        				<div key={index} className='container-grid-services'>
	        					<h4 className='services-title' onClick={() => handleTitleClick(index)}>{marketing.title}</h4>
	        					<p className={`services-description ${visibleDescriptionIndex === index ? 'show-description' : ''}`}>{marketing.description}</p>
	        					<p>{marketing.price}</p>
	        					<Link to={`https://wa.me/+543574511196?text=Hola,%20me%20interesa%20su%20${marketing.title}.`}  className='icon-to-prices' style={{textDecoration: 'none'}}><TiArrowRightOutline /></Link>
	        				</div>
	      				))}
	      			</div>
				</div>
			</div>
		</Layout>
	);
};

export default DigitalMarketing;