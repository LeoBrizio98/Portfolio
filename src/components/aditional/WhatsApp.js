import React from 'react';
import '../../styles/components.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
	return (
		<div className='whatsapp-button'>
			<Link to='https://wa.me/+543574511196?text=Hola,%20me%20interesa%20recibir%20más%20información%20acerca%20del%20sus%20de%20servicios.'>
				<img src={require(`../../images/whatsapp-logo.png`)} alt="WhatsApp Icon" />
			</Link>
		</div>
	);
};