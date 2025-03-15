import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import Error404 from './containers/errors/Error404';
// Static Pages
import Home from './containers/pages/Home';
import ProjectDetail from './containers/pages/ProjectDetail';
//Projects
import Calculator from './containers/projects/Calculator';


function App() {
    return (
            <Router>
                <Routes>
                    {/* Error Display */}
                    <Route path='*' element={<Error404 />} />

                    {/* Static Pages */}
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/projects/:projectId' element={<ProjectDetail />} />
                    <Route exact path='/projects/calculator' element={<Calculator />} />
                </Routes>
            </Router>
    );
}

export default App;