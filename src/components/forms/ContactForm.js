//React
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//Components
import emailjs from '@emailjs/browser';
//Styles
import '../../styles/static-pages.css';
//Icons
import {
    FaFacebook,
    FaLinkedin,
    FaPhoneAlt,
    FaRegEnvelope,
    FaGithub
} from "react-icons/fa";


export const ContactForm = () => {

    const { t } = useTranslation();
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
                <div className='technos-title'>
                    <h3 className='uppertitle-home'>{t("contact")}</h3>
                    <h4 className='lowertitle-home'>{t("contact-me")}</h4> 
                </div>
                <div className='contain-info-contact'>
                    <div className='info-contact'>
                        <FaPhoneAlt className='contact-icon' />
                        <p className='info-contact-text'>{t("my-phone-number")}</p>
                    </div>
                    <Link to='https://wa.me/+543574511196?text=Hola,%20me%20interesan%20sus%20servicios%20web.' className='info-contact-link' style={{textDecoration: 'none'}}>+54 9 3574-511196</Link>
                </div>
                <div className='contain-info-contact'>
                    <div className='info-contact'>
                        <FaRegEnvelope className='contact-icon' />
                        <p className='info-contact-text'>{t("email")}</p>
                    </div>
                    <Link to='mailto:leobrizio98@gmail.com' className='info-contact-link' style={{textDecoration: 'none'}}>leobrizio98@gmail.com</Link>
                </div>
                <div className='container-social-media'>
                     <Link to='https://www.facebook.com/profile.php?id=61564867531134' className='contain-social-media facebook' target='_blank' style={{textDecoration:'none'}}>
                         <div className='social-media-btn facebook'>
                            <span></span>
                        </div>
                    </Link>
                    <Link to='https://github.com/LeoBrizio98?tab=repositories' className='contain-social-media github' target='_blank' style={{textDecoration:'none'}}>
                        <div className='social-media-btn github'>
                            <span></span>
                        </div>
                    </Link>
                    <Link to='https://www.linkedin.com/in/leonel-brizio-940223245' className='contain-social-media linkedin' target='_blank' style={{textDecoration:'none'}}>
                        <div className='social-media-btn linkedin'>
                            <span></span>
                        </div>
                    </Link>
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
                            <span>{t("name")}</span>
                            <i></i>
                        </div>
                        <div className='input-contact'>
                            <input
                                type='email'
                                name='user_email'
                                className='input-contact-form'
                                required
                            />
                            <span>{t("email")}</span>
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
                            <span>{t("subject")}</span>
                            <i></i>
                        </div>
                        <div className='input-contact'>
                            <input
                                    name='phone'
                                    type='text'
                                    className='input-form'
                                    required
                                />
                            <span>{t("phone")}</span>
                            <i></i>
                        </div>
                    </div>
                    <div className='input-contact-msg'>
                        <textarea name='message' className='input-contact-form' required></textarea>
                        <span>{t("message")}</span>
                        <i></i>
                    </div>
                    <p className='required-fields'>{t("required-fields")}</p>
                    <div className='container-submit-button'>
                        {sendedEmail ? (
                            <p className='submited-contact-button'>Enviado</p>
                        ) : (
                            <button type='submit' className='submit-button'>
                                <span>{t("send")}</span>
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
};