
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
	return (
		<Router>
			<div className="app-container">
				<Header />
				<main className="main-content">
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
