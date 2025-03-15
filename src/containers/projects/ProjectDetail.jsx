//Components 
import Layout from '../../hocs/Layout';
import { useState, useEffect } from 'react';
//React
import { projects } from '../../helpers/AdvancedProjects';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaXTwitter,
	FaRegSquarePlus,
	FaRegSquareMinus,
} from 'react-icons/fa6';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
//Styles
import '../../styles/static-pages.css';


const MenuDetail = () => {

	const params = useParams();
	const projectId = params.projectId;
	const [project, setProject] = useState(null);

	useEffect(() => {
		window.scrollTo(0,0)
        const selectedProject = projects.find(d => d.id === parseInt(projectId, 10));
        setProject(selectedProject);
    }, [projectId]);

	return (
		<Layout>
			<div className=''>
				{project ? (
                    <div className='container-project-detail'>
                    	<div className='contain-project-detail'>
                    		<div className='container-project-image'>
		                    	<div className='contain-project-image'>
		                        	<img src={project.main_image} alt={project.name} />
		                        </div>
	                        </div>
	                        <div className='contain-project-info'>
	                        	<h2>{project.name}</h2>
	                        	<p className='description-text'>{project.description}</p>
	                        	<p className='price-text'>${project.price}</p>
	                        	<div className='container-share-links'>
	                        		<p>Compartir</p>
	                        		<div className='link-to-share'>
	                        			<Link to='/' className='share-links' style={{textDecoration: 'none'}}><FaFacebook /></Link>
	                        			<Link to='/' className='share-links' style={{textDecoration: 'none'}}><FaInstagram /></Link>
	                        			<Link to='/' className='share-links' style={{textDecoration: 'none'}}><FaWhatsapp /></Link>
	                        			<Link to='/' className='share-links' style={{textDecoration: 'none'}}><FaXTwitter /></Link>
	                        		</div>
	                        	</div>
	                        	<div className='container-add-quantity'>
	                        		<div className='container-quantity'>
	                        			<button className='button-add-minus'><FaRegSquareMinus /></button>
	                        			<p>2</p>
	                        			<button className='button-add-minus'><FaRegSquarePlus /></button>
	                        		</div>
	                        		<button className='btn btn-2'>Añadir al pedido</button>
	                        	</div>
	                        </div>
                        </div>
                        <div>
                    		<Link to='/menu' className='back-to-menu' style={{textDecoration: 'none'}}><FaArrowLeft className='icon-back' />Volver al menú</Link>
                		</div>
                    </div>
                ) : (
                	<div>
                    <p>Plato no encontrado.</p>
                    	<Link to='/menu' className='' style={{textDecoration: 'none'}}>Volver al menú</Link>
                	</div>
                )}
                
			</div>
		</Layout>
	)
}

export default MenuDetail;