import React from 'react';
import { useState } from 'react';
import '../../styles/components.css';

export const FAQ = () => {
	const [answersVisible, setAnswersVisible]=useState({});

	const toggleAnswer = (index) => {
		setAnswersVisible({
			...answersVisible,
			[index]: !answersVisible[index]
		});
	};

	return (
		<div className='container-faq'>
			{faqData.map((item, index) => (
				<div className='faq-item'>
					<button className='faq-button' onClick={() => toggleAnswer(index)}>{item.question}</button>
					{answersVisible[index] && <p className='faq-text'>{item.answer}</p>}
				</div>
			))}
		</div>
	);
};

const faqData = [
	{
    	question: "¿Qué incluye el diseño web que ofrecen?",
    	answer: "Nuestro servicio de diseño web incluye el diseño y desarrollo de páginas web personalizadas, optimización para motores de búsqueda (SEO), diseño responsive para móviles y tablets, y soporte técnico post-lanzamiento."
  	},
	{
    	question: "¿Cómo funciona el proceso de diseño publicitario?",
    	answer: "Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y objetivos. Desde la conceptualización hasta la entrega final, aseguramos que cada pieza publicitaria refleje su marca de manera efectiva y atractiva."
  	},
  	{
    	question: "¿Ofrecen servicios de marketing digital?",
    	answer: "Sí, ofrecemos una gama completa de servicios de marketing digital, incluyendo gestión de redes sociales, publicidad en línea (Google Ads, Facebook Ads), email marketing, y análisis de datos para optimizar las campañas."
  	},
  	{
    	question: "¿Qué beneficios tiene usar su software de punto de venta?",
    	answer: "Nuestro software de punto de venta es intuitivo y fácil de usar, ofrece gestión de inventarios, reportes de ventas en tiempo real, integración con diversos métodos de pago, y soporte técnico continuo para asegurar el buen funcionamiento de su negocio."
  	},
  	{
    	question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    	answer: "El tiempo de desarrollo varía según la complejidad y los requisitos específicos del proyecto. En general, un sitio web básico puede tardar entre 3 y 4 semanas, mientras que proyectos más complejos pueden llevar hasta 8 semanas o más."
  	},
  	{
    	question: "¿Pueden rediseñar un sitio web existente?",
    	answer: "Sí, ofrecemos servicios de rediseño de sitios web para mejorar la estética, funcionalidad y rendimiento de su sitio actual, asegurando una experiencia de usuario optimizada y mayor conversión."
  	},
  	{
    	question: "¿Cómo determino qué plan de diseño web es el adecuado para mi negocio?",
    	answer: "Durante nuestra consulta inicial, evaluamos sus necesidades específicas y objetivos de negocio para recomendar el plan que mejor se ajuste a sus requerimientos y presupuesto."
  	},
  	{
    	question: "¿Cuál es la diferencia entre el e-commerce prediseñado y el personalizado?",
    	answer: "El e-commerce prediseñado es una plantilla funcional con la unica posibilidad de variar logos, imagenes, colores y algunas disposiciones. En cambio el diseño personalizado trata de un diseño completamente nuevo, una experiencia única, con animaciones y efectos propios diseñados a tu medida."
  	},
  	{
    	question: "¿Ofrecen planes de mantenimiento para sitios web?",
    	answer: "Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de contenido, soporte técnico, actualizaciones de seguridad y monitoreo del rendimiento del sitio."
  	},
  	{
    	question: "¿Cómo aseguran que el diseño publicitario sea efectivo?",
    	answer: "Nos basamos en investigaciones de mercado y análisis de datos para crear diseños publicitarios que resuenen con su público objetivo. Además, realizamos pruebas y ajustes continuos para maximizar la efectividad de cada campaña."
  	},
  	{
    	question: "¿Qué formas de pago aceptan?",
    	answer: "Aceptamos diversas formas de pago, incluyendo transferencias bancarias, tarjetas de crédito y débito, y pagos a través de plataformas como PayPal. Para nuestros clientes en Argentina, el valor del dólar se tomará a valor dólar no oficial o dólar blue al momento del pago o la solicitud del servicio."
  	},
];