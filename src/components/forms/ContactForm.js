import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import '../../styles/components.css';
import {
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaYoutube,
    FaLinkedin,
    FaPhoneAlt,
    FaRegEnvelope,
    FaGithub
} from "react-icons/fa";


export const ContactForm = () => {

    const form = useRef();
    const [sendedEmail, setSendedEmail] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_mwgltv9', 'template_sco1pyb', form.current, {
                publicKey: '22tKECBM3o4X0FoPS',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSendedEmail(true);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='container-contact-form'>
            <div className='container-info-contact'>
                <div className='contain-contact-paragraph'>
                    <h3 className='container-uppertitle-home'>Contacto</h3>
                    <h4 className='home-caracteristics-title'>Comunícate con Nosotros</h4> 
                    <p>Si te gustaria conocer más, acerca de los servicios que ofrecemos, 
                    comunícate con nosotros a través de los diferentes medios</p>
                </div>
                <div className='contain-info-contact'>
                    <div className='info-contact'>
                        <FaPhoneAlt className='contact-icon' />
                        <p className='info-contact-text'>Número de Whatsapp</p>
                    </div>
                    <Link to='https://wa.me/+543574511196?text=Hola,%20me%20interesan%20sus%20servicios%20web.' className='info-contact-link' style={{textDecoration: 'none'}}>+54 9 3574-511196</Link>
                </div>
                <div className='contain-info-contact'>
                    <div className='info-contact'>
                        <FaRegEnvelope className='contact-icon' />
                        <p className='info-contact-text'>Email</p>
                    </div>
                    <Link to='mailto:contactokching@gmail.com' className='info-contact-link' style={{textDecoration: 'none'}}>contactokching@gmail.com</Link>
                </div>
                <div className='container-contact-social'>
                    <div className='contain-contact-social'>
                        <Link to='https://www.facebook.com/profile.php?id=61564867531134' className='contain-social-btn facebook' target='_blank' style={{textDecoration:'none'}}>
                            <div className='social-btn facebook'>
                                <FaFacebook className='social-btn-icon' />
                            </div>
                            <span className='social-text'>Facebook</span>
                        </Link>
                        <Link to='https://www.instagram.com/kching_ar/' className='contain-social-btn instagram' target='_blank' style={{textDecoration:'none'}}>
                            <div className='social-btn instagram'>
                                <FaInstagram className='social-btn-icon' />
                            </div>
                            <span className='social-text'>Instagram</span>
                        </Link>
                        <Link to='https://ar.pinterest.com/LeoBrizio98/' className='contain-social-btn pinterest' target='_blank' style={{textDecoration:'none'}}>
                            <div className='social-btn pinterest'>
                                <FaPinterest className='social-btn-icon' />
                            </div>
                            <span className='social-text'>Pinterest</span>
                        </Link>
                        <Link to='https://www.linkedin.com/in/leonel-brizio-940223245' className='contain-social-btn linkedin' target='_blank' style={{textDecoration:'none'}}>
                            <div className='social-btn linkedin'>
                                <FaLinkedin className='social-btn-icon' />
                            </div>
                            <span className='social-text'>Linkedin</span>
                        </Link>
                        <Link to='https://www.youtube.com/@K-ching' className='contain-social-btn youtube' target='_blank' style={{textDecoration:'none'}}>
                            <div className='social-btn youtube'>
                                <FaYoutube className='social-btn-icon' />
                            </div>
                            <span className='social-text'>YouTube</span>
                        </Link>
                        <Link to='https://github.com/LeoBrizio98?tab=repositories' className='contain-social-btn github' target='_blank' style={{textDecoration:'none'}}>
                            <div className='social-btn github'>
                                <FaGithub className='social-btn-icon' />
                            </div>
                            <span className='social-text'>GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <div className='contain-contact-form'>
                    <div className='container-contact-divider'>
                        <div className='input-contact'>
                            <input
                                type='text'
                                name='user_name'
                                className='input-contact-form'
                                required
                            />
                            <span>Nombre</span>
                            <i></i>
                        </div>
                        <div className='input-contact'>
                            <input
                                type='email'
                                name='user_email'
                                className='input-contact-form'
                                required
                            />
                            <span>Email</span>
                            <i></i>
                        </div>
                    </div>
                    <div className='container-contact-divider'>
                        <div className='input-contact'>
                            <input 
                                type='text' 
                                name='subject' 
                                className='input-contact-form' 
                                required 
                            />
                            <span>Asunto</span>
                            <i></i>
                        </div>
                        <div className='input-contact'>
                            <input
                                    name='phone'
                                    type='text'
                                    className='input-form'
                                    required
                                />
                            <span>Teléfono</span>
                            <i></i>
                        </div>
                    </div>
                    <div className='input-contact-msg'>
                        <textarea name='message' className='input-contact-form' required></textarea>
                        <span>Mensaje</span>
                        <i></i>
                    </div>
                    <p className='required-fields'>Todos los campos son obligatorios</p>
                    <div className='container-submit-button'>
                        {sendedEmail ? (
                            <p className='submited-contact-button'>Enviado</p>
                        ) : (
                            <button type='submit' className='submit-button'>
                                <span>Enviar</span>
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
};