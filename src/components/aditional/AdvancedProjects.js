//React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
//Components
import { projects } from '../../helpers/AdvancedProjects';
//Styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/static-pages.css';
//Import required modules
import { Pagination } from 'swiper/modules';

const AdvancedProjects = () => {

    const language = localStorage.getItem('language');

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {projects && projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`projects/${project.id}`} className='container-swiper-img' style={{textDecoration: 'none'}}>
                            <div className='contain-swiper-img'>
                                <img src={project.image} alt='descarga' />
                            </div>
                            <p>{language === 'es'? project.name_es : project.name_en}</p>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default AdvancedProjects;