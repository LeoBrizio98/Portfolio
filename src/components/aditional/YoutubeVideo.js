import React from 'react';


export const YoutubeVideo = ({ link }) => {
	return (
		<div className='container-youtube-video'>
			<iframe 
				width="100%" 
				height="315" 
				src={link} 
				title="YouTube video player" 
				frameborder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
				allowfullscreen>
			</iframe>
		</div>
	);
};