//React
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
//Components
import Layout from '../../hocs/Layout';
import { projects } from '../../helpers/AdvancedProjects';
import { technos } from '../../helpers/Technologies';
//Styles
import '../../styles/static-pages.css';
//Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const ProjectDetail = () => {

	const { t } = useTranslation();
	const params = useParams();
	const projectId = params.projectId;
	const [project, setProject] = useState(null);
	const [projectTechnos, setProjectTechnos] = useState([]);
	const language = localStorage.getItem('language');

	useEffect(() => {
    	window.scrollTo(0, 0);
    	const selectedProject = projects.find(d => d.id === parseInt(projectId, 10));
    
    	if (selectedProject) {
        	setProject(selectedProject);
        	const usedTechnos = technos.filter(tech => selectedProject.tech_used.includes(tech.id));
        	setProjectTechnos(usedTechnos);
    	}
	}, [projectId]);

	return (
		<Layout>
			<div className='container-project-view'>
				{project ? (
                    <div className='container-project-detail'>
                    	<div className='contain-project-detail'>
                    		<div className='container-project-image'>
		                    	<div className='contain-project-image'>
		                        	<img src={project.image} alt={project.name} />
		                        </div>
	                        </div>
	                        <div className='contain-project-info'>
	                        	<h2>{language === 'es'? project.name_es : project.name_en}</h2>
	                        	<p className='description-text'>{language === 'es'? project.description_es : project.description_en}</p>
	                        	<div className='container-item-imgs'>
	                        		<h3>{t("techs-used")}</h3>
	                        		<div className='contain-item-imgs'>
	                        			{projectTechnos.map(tech => (
								            <div key={tech.id} className='technology-item-img'>
								                <img src={tech.image} alt={tech.name} />
								            </div>
								        ))}
	                        		</div>
	                        	</div>
	                        	<Link to={project.link} className='btn btn3' target='_blank' style={{textDecoration: 'none'}}>{t("visit")}</Link>
	                        </div>
                        </div>
                        <div>
                    		<Link to='/' className='back-to-menu' style={{textDecoration: 'none'}}><FaArrowLeft className='icon-back' />{t("back-home")}</Link>
                		</div>
                    </div>
                ) : (
                	<div>
                    <p>{t("project-not-found")}</p>
                    	<Link to='/' className='back-to-menu' style={{textDecoration: 'none'}}><FaArrowLeft className='icon-back' />{t("back-home")}</Link>
                	</div>
                )}
                
			</div>
		</Layout>
	)
}

export default ProjectDetail;