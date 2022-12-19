import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import { AboutUs } from './pages/aboutUs/aboutUs';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/about' element={<AboutUs />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
