import Layout from '../../hocs/Layout';
import { Link } from 'react-router-dom';
import '../../styles/static-pages.css';


const Error404 = () => {
	return (
		<Layout>
			<div className='container-error404'>
				<p>¡UPS! Ha ocurrido un error dirigiendote a la página</p>
				<div className='container-error404-image'><img src={require(`../../images/error404.webp`)} /></div>
				<p>Haz <Link to='/' className='required-fields-link' style={{textDecoration: 'none'}}>Click Aqui</Link> para regresar a inicio</p>
			</div>
		</Layout>
	);
};

export default Error404;