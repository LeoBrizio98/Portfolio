import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/navigation/Navbar';


const Layout = (props) => {

	return (
		<div>
			<Navbar />
			<ToastContainer autoClose={5000} />
			{props.children}
		</div>
	);
};

export default Layout