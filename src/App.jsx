import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import MainLayout from './Layouts/MainLayout';
// Next is to load the HomePage lazily to improve performance
const HomePage = lazy(() => import('./Pages/HomePage'));




function App() {
	return (
		<BrowserRouter>
			{/* Suspense is used to show a fallback loading while the component is being loaded */}
			<Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
					</Route>
				</Routes>
			</Suspense>

		</BrowserRouter>
	)
}

export default App
