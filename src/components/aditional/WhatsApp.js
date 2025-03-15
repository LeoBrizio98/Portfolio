//React
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
//Styles
import '../../styles/static-pages.css';
//Icons
import { FaWhatsapp } from "react-icons/fa";


export const WhatsAppButton = () => {

	const { t } = useTranslation();

	return (
		<Link to='https://wa.me/+543574511196?text=Hola,%20me%20interesa%20recibir%20más%20información%20acerca%20del%20sus%20de%20servicios.' className='whatsapp-button' style={{textDecoration: 'none'}}>
			<div className='whatsapp-icon'><FaWhatsapp /></div>
			<p className='whatsapp-text'>{t("online")}</p>
		</Link>
	);
};