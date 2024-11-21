//Components
import Layout from '../../hocs/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { YoutubeVideo } from '../../components/aditional/YoutubeVideo';
import { ReactTyped } from 'react-typed';
import { ContactForm } from '../../components/forms/ContactForm';
import { WhatsAppButton } from '../../components/aditional/WhatsApp';
//Styles
import '../../styles/static-pages.css';
//Icons
import { PiCodeSimpleBold } from "react-icons/pi";
import { IoMdCreate } from "react-icons/io";
import { RiMegaphoneLine, RiPagesLine } from "react-icons/ri";
import { FaArrowRightLong } from 'react-icons/fa6';


const About = () => {

	useEffect(() => {
		window.scrollTo(0,0)
	}, []);

	return (

		<Layout>
			<div className='container-presentation-skills'>
				<div className='container-presentation'>
					<div className='contain-presentation'>
						<p className='aboutus-text'>Hola a todos!</p>
						<h2 className='presentation-title'>Soy <ReactTyped
		          			strings={['Leonel Brizio', 'Programador', 'Desarrollador', 'Diseñador']}
		          			typeSpeed={60}
		          			backSpeed={60}
		          			loop
		          			className='color-presentation-title'
		        		/></h2>
						<p className='aboutus-text'>Soy un joven argentino apasionado por el diseño web y la programación. 
						Este emprendimiento abarca desde pequeñas startups hasta grandes empresas, mi objetivo es brindar un servicio 
						que no solo te ayude a destacarte en el mercado, sino que también te haga más eficiente en todas tus operaciones.</p>
					</div>
					<div>
					</div>
				</div>
				<div className='container-skills'>
					<div className='boxes-skills'>
						<RiPagesLine className='skill-icons' />
						<h3>Diseño Web</h3>
						<p>Con experiencia en diseño UX/UI, me especializo en crear sitios web que no solo sean visualmente atractivos sino también 
						intuitivos y fáciles de navegar. Mi enfoque está en la experiencia del usuario.</p>
					</div>
					<div className='boxes-skills'>
						<IoMdCreate className='skill-icons' />
						<h3>Logotipo y Marca</h3>
						<p>Ofrezco servicios de diseño de logotipos y branding que capturan la esencia de tu negocio y resuenan con tu audiencia. 
						Creo identidades visuales que son memorables y representan fielmente tus valores y objetivos.</p>
					</div>
					<div className='boxes-skills'>
						<RiMegaphoneLine className='skill-icons' />
						<h3>Marketing</h3>
						<p>En el mundo digital actual, una estrategia de marketing efectiva es la diferencia entre el éxito y el fracaso. 
						Ofrezco soluciones de marketing que incluyen marketing en redes sociales, y campañas de publicidad.</p>
					</div>
					<div className='boxes-skills'>
						<PiCodeSimpleBold className='skill-icons' />
						<h3>Creación de Software</h3>
						<p>Desarrollo software personalizado que se adapta a las necesidades específicas de tu negocio. Ya sea que necesites 
						automatizar procesos, gestionar datos de manera eficiente, o mejorar la interacción con tus clientes.</p>
					</div>
				</div>
			</div>
			<div className='container-mision-vision'>
				<div className='mision-vision-value'>
					<div className='mision-vision-img'>
						<img src={require(`../../images/mision.png`)} alt='mision' />
					</div>	
					<h3>Nuestra Misión</h3>
					<div className='mision-vision-text'>
						<p>Ayudar a empresas a mejorar su presencia digital a través de soluciones innovadoras en diseño web y marketing, impulsando su crecimiento en el entorno online.</p>
					</div>
				</div>
				<div className='mision-vision-value vision-center'>
					<div className='mision-vision-img'>
						<img src={require(`../../images/vision.png`)} alt='vision' />
					</div>	
					<h3>Nuestra Visión</h3>
					<div className='mision-vision-text'>
						<p>Ser la empresa líder en el desarrollo de soluciones digitales que conecten a las empresas con sus clientes y potencien su éxito en la era digital.</p>
					</div>
				</div>
				<div className='mision-vision-value'>
					<div className='mision-vision-img'>
						<img src={require(`../../images/valores.png`)} alt='valores' />
					</div>	
					<h3>Nuestros Valores</h3>
					<div className='mision-vision-text'>
						<p>Innovación, compromiso con el cliente, excelencia en el servicio y enfoque en resultados efectivos para el crecimiento de tu empresa o negocio.</p>
					</div>
				</div>
			</div>
			<div className='container-about-software'>
				<h3 className='container-uppertitle-home'>Nuestras historia</h3>
				<h4 className='home-plans-title'>Como Comenzamos</h4>
				<div className='about-software-content'>
					<div className='software-main'>
						<YoutubeVideo link={"https://www.youtube.com/embed/YU-8_dr6M0Q?si=Ik-0qrLTZ_YVFLmO"} />
					</div>
					<div className='contain-about-software'>
						<p>Comenzamos desarrollando software en plantillas de Excel, simples hojas de cálculo que se transforman en programas complejos. De 
						alli hasta la creación de sitios web cautivadores, software a medida y estrategias de marketing digital que impulsan a los 
						pequeños y grandes emprendedores con soluciones digitales.</p>
						<Link to='/' className='button-home' style={{textDecoration: 'none'}}>
							<div className='button-home-icon'>
								<FaArrowRightLong />
							</div>
							<span>Visitanos</span>
						</Link>
					</div>
				</div>
			</div>
			<div className='container-mision'>
			</div>
			<div className='container-about-work'>
				<h3 className='container-uppertitle-home'>Como trabajamos</h3>
				<h4 className='home-caracteristics-title'>Esta es Nuestra Manera de Trabajar</h4>
				<div className='contain-about-work'>
					<div className='content-about-work'>
						<img className='about-work-img' src={require(`../../images/about-work1.webp`)} alt='online-presence' />
						<h4 className='about-work-title'>Presencia en línea</h4>
						<div className='overlay'>
							<p className='about-work-text'>Imagina tener una presencia en línea que cautiva a tus clientes desde el primer clic, una plataforma web que simplifica tus procesos internos y te permite alcanzar tus metas comerciales de manera más rápida y efectiva. Esa es precisamente la experiencia que busco ofrecerte.</p>
						</div>
					</div>
					<div className='content-about-work'>
						<img className='about-work-img' src={require(`../../images/about-work2.webp`)} alt='creative-focus' />
						<h4 className='about-work-title'>Enfoque creativo</h4>
						<div className='overlay'>
							<p className='about-work-text'>Con mi enfoque personalizado y creativo, me aseguro de entender tus necesidades específicas y trabajar contigo para desarrollar soluciones que no solo sean visualmente impactantes, sino también funcionales y altamente efectivas.</p>
						</div>
					</div>
					<div className='content-about-work'>
						<img className='about-work-img' src={require(`../../images/about-work3.webp`)} alt='digital-tools' />
						<h4 className='about-work-title'>Herramientas digitales</h4>
						<div className='overlay'>
							<p className='about-work-text'>Desde la creación de tu sitio web hasta el desarrollo de aplicaciones personalizadas y estrategias de marketing digital, estoy aquí para ser tu aliado en el mundo digital. ¡Permíteme ayudarte a llevar tu negocio al siguiente nivel y destacarte en el competitivo mercado actual!</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container-trusted-background'>
				<div className='container-trusted'>
					<h3 className='trusted-title'>Ya confiaron en nosotros</h3>
					<div className='contain-trusted'>
						<Link to='https://registrobienesmuebles.com.ar' className='container-links-trusted' target='_blank' style={{textDecoration: 'none'}}><img src={require(`../../images/logorbm.png`)} alt='logo-rbm' /></Link>
						<Link to='https://la-joyita.com' className='container-links-trusted' target='_blank' style={{textDecoration: 'none'}}><img src={require(`../../images/logojoyita.png`)} alt='logo-joyita' /></Link>
						<Link to='https://brendaledesma.blog' className='container-links-trusted' target='_blank' style={{textDecoration: 'none'}}><img src={require(`../../images/logo-bren.png`)} alt='logo-bren' /></Link>
						<Link to='https://sistersjs.com' className='container-links-trusted sjs' target='_blank' style={{textDecoration: 'none'}}><img src={require(`../../images/sjs.png`)} alt='logo-sjs' /></Link>
						<Link to='https://parrillalacurva.com' className='container-links-trusted' target='_blank' style={{textDecoration: 'none'}}><img src={require(`../../images/logo-la-curva.png`)} alt='logo-la-curva' /></Link>
					</div>
				</div>
			</div>
			<div className='container-contact-about'>
				<ContactForm />
			</div>
			<WhatsAppButton />
		</Layout>
	);
};

export default About;