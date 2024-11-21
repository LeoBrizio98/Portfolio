import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components.css';


const quote = {
	initial:{
		opacity:0,
	},
	animate:{
		opacity:1,
		transition:{
			delay:0.5,
		}
	}
}


export const AnimatedText = ({text, className=""}) => {
	return (
		<div className='container-animated-text'>
			<motion.h1 className={`animated-text ${className}`}
			variants={quote}
			initial="initial"
			animate="animate"
			>
			{
				text.split(" ").map((word, index) =>
					<motion.span key={word+'-'+index} className='animate-text'>
						{word}&nbsp;
					</motion.span>
				)
			}
			</motion.h1>

		</div>
	);
}