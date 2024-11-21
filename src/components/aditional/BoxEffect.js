import { useEffect, useState } from 'react';
import { RiUserLine } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdNewspaper } from "react-icons/md";


const BoxEffect = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 3000); // Cambiar cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container-effect-boxes'>
            <div className={`box-web-design ${activeIndex === 0 ? 'active-box' : ''}`}>
                <RiUserLine className='icon-box-effect' />
                <h4>Blog Personal</h4>
                <p>Comparte tus pensamientos, experiencias, conocimientos y pasatiempos con una audiencia global. Los temas pueden variar 
                ampliamente, desde la vida cotidiana y viajes hasta opiniones sobre diversos temas.</p>
            </div>
            <div className={`box-web-design ${activeIndex === 1 ? 'active-box' : ''}`}>
                <IoTimerOutline className='icon-box-effect' />
                <h4>Landing Page</h4>
                <p>Diseñada para convertir visitantes en clientes. Esta página esta vinculada a una campaña de marketing 
                específica y tiene un objetivo claro, como la venta de un producto, la recopilación de correos electrónicos o la 
                promoción de un evento.</p>
            </div>
            <div className={`box-web-design ${activeIndex === 2 ? 'active-box' : ''}`}>
                <HiOutlineBuildingLibrary className='icon-box-effect' />
                <h4>Web Institucional</h4>
                <p>El sitio web oficial de una organización, como una empresa, universidad, ONG o entidad gubernamental. Su propósito es 
                proporcionar información sobre la institución, sus servicios, misión, visión, historia y equipo.</p>
            </div>
            <div className={`box-web-design ${activeIndex === 3 ? 'active-box' : ''}`}>
                <MdNewspaper className='icon-box-effect' />
                <h4>Portal Web</h4>
                <p>Es un sitio que ofrece una variedad de recursos y servicios en un solo lugar, como noticias, correo electrónico, foros, 
                motores de búsqueda y enlaces a otras páginas. Están diseñados para ser puntos de entrada a internet para los usuarios.</p>
            </div>
        </div>
    );
};

export default BoxEffect;