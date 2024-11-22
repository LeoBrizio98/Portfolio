import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import Error404 from './containers/errors/Error404';
// Static Pages
import Home from './containers/pages/Home';
import About from './containers/pages/About';
import Contact from './containers/pages/Contact';
import Services from './containers/pages/Services';

//Policies
import CookiesPolicies from './containers/policies/CookiesPolicies';
import PrivacyPolicies from './containers/policies/PrivacyPolicies';
import PurchasingPolicies from './containers/policies/PurchasingPolicies';
//Services
import WebDesign from './containers/services/WebDesign';
import WebDesignDetail from './containers/services/WebDesignDetail';
import DigitalMarketing from './containers/services/DigitalMarketing';


function App() {
    return (
            <Router>
                <Routes>
                    {/* Error Display */}
                    <Route path='*' element={<Error404 />} />

                    {/* Static Pages */}
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/services' element={<Services />} />

                    {/* Services */}
                    <Route exact path='/services/web-design' element={<WebDesign />} />
                    <Route exact path='/services/web-design/:packId' element={<WebDesignDetail />} />
                    <Route exact path='/services/digital-marketing' element={<DigitalMarketing />} />

                    {/* Policies */}
                    <Route exact path='/cookies-policies' element={<CookiesPolicies />} />
                    <Route exact path='/privacy-policies' element={<PrivacyPolicies />} />
                    <Route exact path='/purchasing-policies' element={<PurchasingPolicies />} />
                </Routes>
            </Router>
    );
}

export default App;