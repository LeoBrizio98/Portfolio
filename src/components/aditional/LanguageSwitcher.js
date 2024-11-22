//React
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
//Styles
import '../../styles/navigation.css';
//Icons
import { GoChevronDown, GoChevronUp, GoCheck } from "react-icons/go";


const LanguageSwitcher = () => {

    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const language = localStorage.getItem('language');
    const [toggleLang, setToggleLang] = useState(false);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    const handleLanguage = () => {
        setToggleLang(!toggleLang);
    };

    return (
        <button className='container-buttons-language' onClick={handleLanguage}>
            <div className='language-select'><p className='language-text'>{language === 'es' ? 'ES' : 'EN'}</p>{toggleLang ? <GoChevronUp /> : <GoChevronDown />}</div>
            <div className={`contain-buttons-language ${toggleLang ? 'open-lang' : ''}`}>
                <button className='Language-button' onClick={() => changeLanguage('es')}><GoCheck className={`check-icon-lang ${language === 'es' ? 'active-lang' : ''}`} />{t("spanish")}</button>
                <button className='Language-button' onClick={() => changeLanguage('en')}><GoCheck className={`check-icon-lang ${language === 'en' ? 'active-lang' : ''}`} />{t("english")}</button>
            </div>
        </button>
    );
};

export default LanguageSwitcher;