//Components
import Layout from '../../hocs/Layout';
import { useEffect } from 'react';
import { ContactForm } from '../../components/forms/ContactForm';
//Styles
import '../../styles/static-pages.css';


const Contact = () => {

	useEffect(() => {
		window.scrollTo(0,0)
	}, []);

	return (

		<Layout>
			<div className='container-contact-contact-form'>
				<ContactForm />
			</div>
			{/*<div className='container-contact-background'>
				<GoogleMapsEmbed />
			</div>*/}
		</Layout>
	);
};

export default Contact;