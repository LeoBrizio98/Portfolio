//Components
import Layout from '../../hocs/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { YoutubeVideo } from '../../components/aditional/YoutubeVideo';
import { ReactTyped } from 'react-typed';
import '../../styles/web-design.css';
//Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";
import { LuPencilRuler } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";


const WebDesign = () => {

	useEffect(() => {
		window.scrollTo(0,0);
	}, []);

	return (

		<Layout>
			<div className='container-webd-header'>
				<div className='webd-header-image'>
					<img src={require(`../../images/web.webp`)} alt='diseño-web' />
				</div>
				<h3 className='webd-header-title'>
					Diseña tu <br/> <ReactTyped
          				strings={['Página Web', 'Blog Personal', 'Landing Page', 'E-commerce', 'Curriculum']}
          				typeSpeed={60}
          				backSpeed={60}
          				loop
        			/>
        		</h3>
				<Link className='button-home' to='https://wa.me/+543574511196?text=Hola,%20quiero%20obtener%20mi%20página%20web.' style={{textDecoration: 'none'}}>
					<div className='button-home-icon'>
						<FaArrowRightLong />
					</div>
					<span>Créala Ya</span>
				</Link>
			</div>
			<div className='container-web-design'>
				<h3 className='container-uppertitle-home'>Nuestros planes de diseño web</h3>
				<h4 className='home-caracteristics-title'>Haz Crecer tu Negocio</h4>
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
							<Link className='packs-button' to={`https://wa.me/+543574511196?text=Hola,%20me%20interesa%20comprar%20su%20.`} style={{textDecoration: 'none'}}>
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
							<Link className='packs-button' to={`https://wa.me/+543574511196?text=Hola,%20me%20interesa%20comprar%20su%20.`} style={{textDecoration: 'none'}}>
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
							<Link className='packs-button' to={`https://wa.me/+543574511196?text=Hola,%20me%20interesa%20comprar%20su%20.`} style={{textDecoration: 'none'}}>
	      						<span>Lo quiero</span>
	      					</Link>
						</div>
						<div className='pack-paragraph'>
							<p className='check-list-text'>Ideal para: <span>Empresas que desean destacar con un diseño único, con necesidades específicas y una experiencia de usuario altamente optimizada</span></p>
						</div>
					</div>
	    		</div>
    		</div>
			<div className='container-ecommerce-pred'>
				<div className='container-ecommerce-video'>
					<YoutubeVideo link={"https://www.youtube.com/embed/YU-8_dr6M0Q?si=Ik-0qrLTZ_YVFLmO"} />
				</div>
				<div className='contain-ecommerce-pred'>
					<h3 className='container-uppertitle-home'>Nuestro e-commerce prediseñado</h3>
					<h4 className='home-caracteristics-title'>Un sitio web listo para comenzar tu negocio</h4>
					<p className='ecommerce-pred-text'>Con algunos detalles personalizables</p>
					<Link className='button-home' to='/services/ecommerce' style={{textDecoration: 'none'}}>
						<div className='button-home-icon'>
							<FaArrowRightLong />
						</div>
						<span>Ver Más</span>
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default WebDesign