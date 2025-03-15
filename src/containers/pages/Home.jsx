//React
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';
//Components
import Layout from '../../hocs/Layout';
import { WhatsAppButton } from '../../components/aditional/WhatsApp';
import { technos } from '../../helpers/Technologies';
import { ContactForm } from '../../components/forms/ContactForm';
import AdvancedProjects from '../../components/aditional/AdvancedProjects';
import documentPDF from '../../helpers/cv.pdf';
//Styles
import '../../styles/static-pages.css';
//Icons
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";



const Home = () => {

	useEffect(() => {
		window.scrollTo(0,0);
    }, []);

	const { t } = useTranslation();
    const { hash } = useLocation();
    const typedStrings = [
	    "Leonel Brizio",
	    t("programmer"),
	    t("developer"),
	    t("designer"),
	    "Leonel Brizio"
	 ];

  	useEffect(() => {
    	if (hash) {
      		const element = document.querySelector(hash);
      		if (element) {
        		element.scrollIntoView({ behavior: 'smooth' });
      		}
    	}
  	}, [hash]);

  	const handleDownload = () => {
        const link = document.createElement("a");
        link.href = documentPDF;  // Ruta del PDF
        link.download = 'Leonel Brizio - CV.pdf';  // Nombre del archivo descargado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
	
	return (
		<Layout>
			<div className='container-home-all'>
				<div className='container-home-wrapper'>
					<div className='contain-home-wrapper'>
						<div className='wrapper-title-img'>
							<h2>Leonel Brizio</h2>
							<div className='home-wrapper-img'>
								<img src={require(`../../images/perfil.png`)} alt='' />
							</div>
						</div>
						<p className='title-separator'>{t("wrapper-title")}</p>
						<p>{t("wrapper-text")}</p>
						<div className='container-social-media'>
							<Link to='https://www.facebook.com/profile.php?id=61564867531134' className='contain-social-media facebook' target='_blank' style={{textDecoration:'none'}}>
								<div className='social-media-btn facebook'>
									<span></span>
								</div>
							</Link>
							<Link to='https://github.com/LeoBrizio98?tab=repositories' className='contain-social-media github' target='_blank' style={{textDecoration:'none'}}>
								<div className='social-media-btn github'>
									<span></span>
								</div>
							</Link>
							<Link to='https://www.linkedin.com/in/leonel-brizio-940223245' className='contain-social-media linkedin' target='_blank' style={{textDecoration:'none'}}>
								<div className='social-media-btn linkedin'>
									<span></span>
								</div>
							</Link>
						</div>
						<div className='contain-buttons-wrapper'>
							<Link to='https://github.com/LeoBrizio98?tab=repositories' className='btn btn2' target='_blank' style={{textDecoration: 'none'}}>{t("my-works")} <HiOutlineSquare3Stack3D /></Link>
							<Link className='btn btn2' style={{textDecoration: 'none'}}>{t("download-cv")} <MdOutlineFileDownload /></Link>
						</div>
					</div>
				</div>
			<div className='container-dont-wrapper'>
				<div className='container-banner-home' id='top'>
					<div className='contain-banner-home'>
						<p>{t("know-me")}</p>
						<h2 className='presentation-title'>{t("i-am")} <ReactTyped
					          	strings={typedStrings}
					          	typeSpeed={60}
					          	backSpeed={60}
					          	className='color-presentation-title'
					    	/>
					    </h2>
						<div className='contain-buttos-banner-home'>
							<Link to='https://github.com/LeoBrizio98?tab=repositories' className='btn btn2' target='_blank' style={{textDecoration: 'none'}}>{t("my-works")} <HiOutlineSquare3Stack3D /></Link>
							<button className='btn btn2' style={{textDecoration: 'none'}} onClick={handleDownload}>{t("download-cv")} <MdOutlineFileDownload /></button>
						</div>
					</div>
				</div>
	    		<div className='container-home-projects' id='projects'>
	    			<div className='technos-title'>
		    			<h3 className='uppertitle-home'>{t("some-projects")}</h3>
						<h4 className='lowertitle-home'>{t("have-done")}</h4>
					</div>
					<AdvancedProjects />
	    		</div>
	    		<div className='container-about-main' id='about'>
					<div className='about-main-image'>
						<img src={require(`../../images/about-man.png`)} alt='about-man'/>
					</div>
					<div className='main-about-items'>
						<h3>{t("my-name")}</h3>
						<p className='about-main-text'>{t("about-text-1")}</p>
						<p className='about-main-text'>{t("about-text-2")}</p>
						<p className='about-main-text'>{t("about-text-3")}</p>
					</div>
				</div>
				<div className='container-home-stadistics'>
					<div className='contain-home-stadistics'>
						<h3 className='stadistics-title'>{t("growing")}</h3>
						<div className='stadistics-info'>
							<div className='contain-stadistic-info'>
								<h3 className='stadistics-number'>+7</h3>
								<p className='stadistics-text'>{t("satisfied")}</p>
							</div>
							<div className='contain-stadistic-info'>
								<h3 className='stadistics-number'>+15</h3>
								<p className='stadistics-text'>{t("completed")}</p>
							</div>
							<div className='contain-stadistic-info'>
								<h3 className='stadistics-number'>+4</h3>
								<p className='stadistics-text'>{t("companies")}</p>
							</div>
						</div>
					</div>
				</div>
					<div className='container-home-technos' id='skills'>
						<div className='technos-title'>
							<h3 className='uppertitle-home'>{t("know-tech")}</h3>
							<h4 className='lowertitle-home'>{t("behind-work")}</h4>
						</div>
						<div className='container-items'>
							{technos && technos.map((techno, index) => (
								<div className='technos-items' key={index}>
									<div className='technos-item-img'>
										<div className='technos-subitem-img'>
											<img src={techno.image} alt={techno.name} />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				<div className='container-home-skills'>
					<div className='contain-home-skills'>
						<div className='technos-title'>
							<h3 className='uppertitle-home'>{t("knowledge")}</h3>
							<h4 className='lowertitle-home'>{t("behind-work")}</h4>
						</div>
						<div className='container-skills-items'>
							<div className='container-skills-item'>
								<h3 className='skills-title'>{t("education")}</h3>
								<p>{t("unfinished")}</p>
								<p>{t("self-taught")}</p>
							</div>
							<div className='container-skills-item'>
								<h3 className='skills-title'>{t("language")}</h3>
								<p>{t("spanish")}</p>
								<p>{t("english-2")}</p>
							</div>
						</div>
						<div className='container-skills-items'>
							<div className='container-skills-item'>
								<h3 className='skills-title'>{t("skill-set")}</h3>
								<p>{t("web-design")}</p>
								<p>{t("web-app")}</p>
								<p>{t("brainstorming")}</p>
								<p>{t("prototyping")}</p>
								<p>{t("graphic-design")}</p>
							</div>
							<div className='container-skills-item'>
								<h3 className='skills-title'>{t("soft-skill")}</h3>
								<p>{t("teamwork")}</p>
								<p>{t("communication")}</p>
								<p>{t("critical-think")}</p>
								<p>{t("creativity")}</p>
								<p>{t("leadership")}</p>
							</div>
						</div>
					</div>
	    		</div>
	    		<div className='container-contact-contact-form' id='contact'>
					<ContactForm />
				</div>
				<WhatsAppButton />
    		</div>
    		</div>
		</Layout>
	);
};

export default Home